import './style.css'

function TotalMoney ({listTransactions}){
    return (
        <div className='divTotalMoney'>
            <div className='infoMoney'>
                <h4>Valor total:</h4>
                <span>O valor se refere ao saldo</span>
            </div>
            <h4 className='valueMoney'>${listTransactions.reduce((acc, actual) => {
               if(actual.type === 'entry'){
                return acc += Number(actual.value)
            }else{
                if(acc > 0){
                    return acc -= Number(actual.value)
                }else{
                    return 0
                }
            }
        }, 0)
        }
            </h4>
        </div>
    )
}
export default TotalMoney