import './Card.css'


export function Card({transaction, listTransactions, setListTransactions}) {
  function removeCard(card) {
    const newList = listTransactions.filter(element => element !== card)
    setListTransactions(newList)
  }

  return(
    <div className='totalCardList'>
      <div className={'colorCard ' + (transaction.type === 'entrada' ? 'colorIn' : 'colorOut')}>

      </div>
    
    <div className='infoCard'>
      <div className='cardLeft'>
        <h2 className='title-3'>{transaction.description}</h2>
        <h3 className='regular'>{transaction.type === 'entrada' ? 'Entrada' : 'Despesa'}</h3>
      </div>

      <div className='cardRight'>
        <h3 className='regular'>R$ {(transaction.value).toLocaleString()},00</h3>
        <button onClick={() => removeCard(transaction)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="2.46154" transform="matrix(-1 0 0 1 22 0)" fill="#E9ECEF"/>
            <path d="M14.3613 6.7222H12.0697L11.8787 6.37845C11.8023 6.22567 11.6495 6.11108 11.4776 6.11108H9.28147C9.10959 6.11108 8.95681 6.22567 8.88043 6.37845L8.70855 6.7222H6.41688C6.24501 6.7222 6.11133 6.87497 6.11133 7.02775V7.63886C6.11133 7.81074 6.24501 7.94442 6.41688 7.94442H14.3613C14.5141 7.94442 14.6669 7.81074 14.6669 7.63886V7.02775C14.6669 6.87497 14.5141 6.7222 14.3613 6.7222ZM7.12348 15.0295C7.14258 15.526 7.54362 15.8889 8.04015 15.8889H12.719C13.2155 15.8889 13.6165 15.526 13.6356 15.0295L14.0558 8.55553H6.72244L7.12348 15.0295Z" fill="#343A40"/>
          </svg>
        </button>
      </div>
    </div>
    </div>
  )
}