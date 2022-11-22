import './TotalMoney.css'

export function TotalMoney({listTransactions}){
  const value = listTransactions.reduce((accumulator, currentValue) => (currentValue.type === 'entrada' ? accumulator + currentValue.value : accumulator - currentValue.value),0
  )

  return(
    <div className='totalCard'>
    <div className='flex spaceBt'>
    <h2 className='title-3'>Valor total: </h2>
    <p className='title-3'>R$ {value}</p>
    </div>
    <span className='regular'>O valor se refere ao salto</span>
    </div>
  )
}