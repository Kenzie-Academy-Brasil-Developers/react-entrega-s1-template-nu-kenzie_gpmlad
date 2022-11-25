import NoCard from '../../imgs/NoCard.png'
import './NoData.css'

export function NoData() {
  return(
    <div className="noData">
      <h2 className="title-2">Você ainda não possui nenhum lançamento</h2>
      <img src={NoCard} alt="" />
    </div>
  )
}