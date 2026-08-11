import './CardUser.css';

type CardUserProps = {
    nome: string;
    cargo: string;
    foto: string;
}

function CardUser({nome, cargo, foto}:CardUserProps) {
    
    return(
        <>
            <div className="card-user">
                <img src={foto} alt={nome} />
                <h2>{nome}</h2>
                <span>{cargo}</span>
            </div>
        </>
    )
}

export default CardUser;