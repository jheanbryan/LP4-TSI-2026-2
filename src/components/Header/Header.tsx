import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const headleLogout = () => {
        navigate('/login');
    }
    return(
        <>
            <div className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <h1>Meu app</h1>
                    </div>

                    <nav className="header-nav">
                        <button onClick={() => navigate('/home')} className="nav-link">
                            Home
                        </button>

                        <button onClick={() => navigate('/about')} className="nav-link">
                            Sobre
                        </button>
                    </nav>

                    <div className="header-user">
                        <span>Usuário: Joao</span>
                        <button onClick={headleLogout} className="logout-btn">
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;