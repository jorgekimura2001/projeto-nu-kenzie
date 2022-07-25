import { useEffect, useState } from "react";
import Card from "../Card"
import CardNone from "../CardNone"
import './style.css'

function List ({ listTransactions, setListTransactions }){

    const [listActual, setListActual] = useState(listTransactions);
    useEffect(() => {
        setListActual(listTransactions)
    }, [listTransactions])
    
    function removeTransaction(indexTransactions){
        const filter = listTransactions.filter((transaction, index) => index !== indexTransactions);
        setListTransactions(filter)
    }

    function handleAllTransaction(){
        setListActual(listTransactions)
    }

    function handleAllEntry(){
    const filterEntry = listTransactions.filter((transaction) => transaction.type === 'entry')
      setListActual(filterEntry)
    }

    function handleAllExit(){
        const filterExit = listTransactions.filter((transaction) => transaction.type === 'exit')
        setListActual(filterExit)
    }

    return (
        <div className="list__transactions">
            <div className="filters">
                <h3>Resumo financeiro</h3>
                <div className="buttons">
                    <button className="allTransaction"
                    onClick={handleAllTransaction}
                    >Todos</button>
                    <button className="entryTransaction"
                    onClick={handleAllEntry}
                    >Entradas</button>
                    <button className="exitTransaction"
                    onClick={handleAllExit}
                    >Despesas</button>
                </div>
            </div>
            
            {
                listTransactions.length !== 0 ?
                listActual.map((transaction, index) => <Card transaction={transaction} key={index} index={index} removeTransaction={removeTransaction}/>)  
                :
                <CardNone/>
            }
        </div>
    )
}
export default List