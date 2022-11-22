import logoWhite from '../../imgs/NuKenzieBlack.png'
import './Header.css'
export function Header({setUserPage}) {
  function changeUserPageToFalse() {
    setUserPage(false)
  }
  return (
    <div className='boxShadow'>

    
      <div className='container header'>
        <img src={logoWhite} alt="Nu Kenzie" />
        <button className="buttonSmall buttonGray" onClick={changeUserPageToFalse} type="button">Início</button>
      </div>
      </div>
  )
}