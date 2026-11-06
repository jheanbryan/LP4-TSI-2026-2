import "dotenv/config";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "./lib/prisma";
import { authMiddleware, type AuthRequest } from "./middlewares/auth";

const app = express();
app.use(express.json());

// Cadastro
app.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(400).json({ error: "Email já cadastrado" });

  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, name, password: hash },
    select: { id: true, email: true, name: true }, // não devolve a senha
  });

  res.status(201).json(user);
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Rota protegida: cria um post
app.post("/posts", authMiddleware, async (req: AuthRequest, res) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: { title, content, authorId: req.userId! },
  });
  res.status(201).json(post);
});

// Rota protegida: lista os posts do usuário logado
app.get("/posts", authMiddleware, async (req: AuthRequest, res) => {
  const posts = await prisma.post.findMany({ where: { authorId: req.userId } });
  res.json(posts);
});

app.listen(3000, () => console.log("Rodando em http://localhost:3000"));