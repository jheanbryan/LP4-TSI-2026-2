import { useNavigate } from "react-router-dom";
import notFound from '../../assets/notfound.png'
import './NotFound.css'

function NotFound() {

  const navigate = useNavigate()
  return(
    <>
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="notfound-image">
            <img src={notFound} alt="Página não encontrada" />            
          </div>
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Oops! Página nao encontrada</h2>
        
          <button onClick={() => navigate('/home')} className="notfound-btn">
            Voltar para home
          </button>
        </div>
      </div>
    </>
  )
}

export default NotFound;
