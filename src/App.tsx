import './App.css'
import Btn from './components/Btn/Btn'
import CardUser from './components/CardUser/CardUser'

function App() {

  return (
    <>
      <Btn texto='Salvar' corDeFundo='green'/>
      <Btn texto='Editar' corDeFundo='yellow'/>
      <Btn texto='Excluir' corDeFundo='red'/>

      <CardUser 
        nome='Joao'
        cargo='Gerente'
        foto='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

        <CardUser 
        nome='Mario'
        cargo='Dono'
        foto='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

        <CardUser 
        nome='Joao'
        cargo='Gerente'
        foto='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </>
  )
}

export default App
