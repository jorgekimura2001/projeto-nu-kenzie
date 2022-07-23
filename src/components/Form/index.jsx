import { useState } from "react"
import './style.css'

function Form ({ listTransactions, setListTransactions }){

    const [value, setMoneyValue] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('entry')

    function handleSubmit(event){
        event.preventDefault()
        if(value !== '' && description !== ''){
            const newValue = { value, description, type }
            setListTransactions([...listTransactions, newValue])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="description">
                <label htmlFor="description" className="label_description">Descrição</label>
                <input type="text" id="description" placeholder="Digite aqui sua descrição" value={description} onChange = {(evt) => setDescription(evt.target.value)}/>
                <span>Ex: Compra de roupas</span>
            </div>
            <div className="values">
                <div className="value">
                <label htmlFor="value">Valor</label>
                <input type="number" id="value" placeholder="R$" value={value} onChange={(evt) => setMoneyValue(evt.target.value)} />
                </div>
                <div className="type">
                <label htmlFor="type">Tipo de valor</label>
                <select id="type" value={type} onChange={(evt) => setType(evt.target.value)}>
                    <option value="entry">Entrada</option>
                    <option value="exit">Despesas</option>
                </select>
                </div>
            </div>
            <button type="submit" className="btn__insert">Inserir valor</button>
        </form>
    )
}
export default Form