import './Btn.css'

type BtnProps = {
    texto: string;
    corDeFundo: string
}

function Btn( {texto, corDeFundo }: BtnProps ) {

  return (
    <>
        <button
            className='btn'
            style={{backgroundColor: corDeFundo}}
        >

            {texto}
        </button>
    </>
  )
}

export default Btn;
