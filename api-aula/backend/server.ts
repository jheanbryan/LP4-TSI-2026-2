
import "dotenv/config"
import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { prisma } from "./lib/prisma"
import { authMiddleware, AuthRequest } from "./middlewares/auth"

const app = express()
app.use(express.json());

//teste
/*
app.use("/", async(req, res) => {
  console.log("Ok")
})
*/

//cadastro
app.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const exist = await prisma.user.findUnique({ where: { email } });

  if (exist) return res.status(400).json({ error: "Email já cadastrado" })

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, name, password: hash },
    select: { id: true, email: true, name: true }
  })

  res.status(201).json(user);
})


//login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))){
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign({ userId: user.id }, 
    process.env.JWT_SECRET!, {
      expiresIn: "1h",
    }
  )

  res.json({ token });
})

//rota para criar um post
app.post("/posts", authMiddleware, async (req: AuthRequest, res) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: { title, content, authorId: req.userId! }
  })

  res.status(201).json(post);
})


//rota get para listar posts do usuario logado
app.get("/posts", authMiddleware, async (req: AuthRequest, res) => {
  const posts = await prisma.post.findMany({ where: { authorId: req.userId } });

  res.json(posts)
})

//busca todos os posts
app.get("/posts/all", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      author: { select: {id: true, name: true} },
    },
  });

  res.json(posts)
});


//editar um post (do dono)
app.patch("/posts/:id", authMiddleware, async (req: AuthRequest, res) => {
  const id = Number(req.params.id)

  if (Number.isNaN(id)) return res.status(400).json({ error: "ID Inválido" });

  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return res.status(404).json({ error: "Post não encontrado" });
  if(post.authorId !== req.userId) {
    return res.status(403).json({ error: "Voce não pode editar esse post" });
  }

  const { title, content, published } = req.body;
  const updated = await prisma.post.update({
    where: { id },
    data: { title, content, published }
  });

  res.json(updated);
})


//deletar um post (so do dono)
app.delete("/posts/:id", authMiddleware, async(req: AuthRequest, res)=> {
  const id = Number(req.params.id)

  if (Number.isNaN(id)) return res.status(400).json({ error: "ID Inválido" });

  
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return res.status(404).json({ error: "Post não encontrado" });
  if(post.authorId !== req.userId) {
    return res.status(403).json({ error: "Voce não pode deletar esse post" });
  }

  await prisma.post.delete({ where: { id } });
  res.json({ message: "Post deletado com sucesso" })
})


app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000")
})