import { useState } from "react"

import './Form.css'

export function Form({listTransactions,setListTransactions}) {
  const [currentValue,setCurrentValue] = useState(
    { description: "", type: "entrada", value: '' }
  )

  function submit(event) {
    event.preventDefault()
    setListTransactions([...listTransactions,currentValue])
  }

  return(
    <form className="formHome" onSubmit={submit}>
      <div className="formSection">
        <label
        className="regular" htmlFor="description">Descrição</label>
        <input
      required 
      id='description' 
      type='text'
      value={currentValue.description}
      onChange={(event) => setCurrentValue({...currentValue, description:event.target.value})} 
      placeholder="Digite aqui sua descrição"/>
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="flex gap-1 ">

      <div className="formSection halfW spaceBt">
      <label className="regular" htmlFor="value">Valor</label>
      <input
      required
      id='value' 
      type='text'
      value={currentValue.value}
      onChange={(event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '')
        setCurrentValue({...currentValue, value:(!!event.target.value ?parseFloat(event.target.value ): '')})}} 
      placeholder="1"/>
      </div>

      <div className="formSection halfW spaceBt">
      <label className="regular" htmlFor="select">Tipo de valor</label>
      <select name="" 
      id="select"
      defaultValue='entrada'
      onChange={(event) => setCurrentValue({...currentValue, type:event.target.value})} 
      >
        <option value="entrada">Entrada</option>
        <option value="saída">Saída</option>
      </select>
      </div>

      </div>

      <button className="buttonLarge" type="submit">Inserir Valor</button>
    </form>
  )
}