import { Card } from "../Card"
import './List.css'
import NoCard from '../../imgs/NoCard.png'
import { useState } from "react"

export function List({ listTransactions ,setListTransactions}) {

  const [filterType, setFilterType] = useState('todos')

  function changeFilter(filterOption) {
    setFilterType(filterOption)
  }

  return(
    <div className="listSection">
      <div className="List">
        <h2 className="title-3">Resumo financeiro</h2>
        <ul>
          <li>
            <button onClick={() =>changeFilter('todos')} className="buttonSmall">Todos</button>
          </li>
          <li>
            <button onClick={() =>changeFilter('entrada')} className="buttonSmall buttonGray">Entradas</button>
          </li>
          <li>
            <button onClick={() =>changeFilter('saída')} className="buttonSmall buttonGray">Despesas</button>
          </li>
        </ul>
      </div>
      {listTransactions.length === 0 ? 
        (
          <div className="noData">
            <h2 className="title-2">Você ainda não possui nenhum lançamento</h2>
            <img src={NoCard} alt="" />

          </div>
        )
       : 
       <>
       
        {filterType === 'todos' && listTransactions.map((transaction, index) => <Card transaction={transaction} listTransactions={listTransactions} setListTransactions={setListTransactions} key={index} />)}

        {filterType === 'entrada' && (listTransactions.filter(e => e.type === filterType)).map((transaction, index) => <Card transaction={transaction} listTransactions={listTransactions} setListTransactions={setListTransactions} key={index} />) }

        {filterType === 'saída' && (listTransactions.filter(e => e.type === filterType)).map((transaction, index) => <Card transaction={transaction} listTransactions={listTransactions} setListTransactions={setListTransactions} key={index} />) }

       </>
       }
    </div>
  )
}