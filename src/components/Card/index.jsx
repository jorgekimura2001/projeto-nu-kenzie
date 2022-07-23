import {FaTrash} from 'react-icons/fa'

import './style.css'

function Card({transaction , index, removeTransaction}){
   return(
    <div className='divTransaction'>
        {
            transaction.type === 'entry' ?
            <div>
                <div className="green"></div>
                <div className='info'>
                    <h4>{transaction.description}</h4>
                    <span className='span__category'>Entrada</span>
                </div>
                <p>R$ {transaction.value}</p>
                <button className='btn__remove' onClick={() => removeTransaction(index)}><FaTrash/></button>
            </div>
            :
            <div>
            <div className="gray"></div>
            <div className='info'>
                <h4>{transaction.description}</h4>
                <span className='span__category'>Despesas</span>
            </div>
            <p>R$ {transaction.value}</p>
            <button className='btn__remove' onClick={() => removeTransaction(index)}><FaTrash/></button>
        </div>

        }
    </div>
   )
}
export default Card