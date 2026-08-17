import Header from "../../components/Header/Header";
import './Home.css';

function Home() {
  return(
    <>
      <Header/>
      <div className="home-container">
        <div className="home-content">
          <h1>Bem vindo à Home</h1>
          <p>
            Esta é a página inicial!
          </p>

          <div className="home-cards">
            <div className="home-card">
              <h3>Dashboard</h3>
              <p>Visualize suas estatístias</p>
            </div>

            <div className="home-card">
              <h3>Perfil</h3>
              <p>Gerencie seus dados</p>
            </div>

            <div className="home-card">
              <h3>Configurações</h3>
              <p>Personalize suas informações</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
