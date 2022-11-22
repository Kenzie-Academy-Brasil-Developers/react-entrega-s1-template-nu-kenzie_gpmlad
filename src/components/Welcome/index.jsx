import logoWhite from '../../imgs/NuKenzieWhite.png'
import illustration from '../../imgs/illustration.svg'
import './Welcome.css'



export function Welcome({setUserPage}) {
  function changeUserPageToTrue() {
    setUserPage(true)
  }

  return(
    <main>

      <div className='left'>
        <img src={logoWhite} alt="Nu Kenzie" />
        <h1 className='title-1'>Centralize o controle de suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button className='buttonLarge' onClick={changeUserPageToTrue} type="button">Iniciar</button>
      </div>

      <div>
        <img src={illustration} alt="Imagem" />
      </div>
    </main>
  )
}