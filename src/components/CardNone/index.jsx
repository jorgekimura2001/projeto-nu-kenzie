import cardNones from '../../assets/no-value-cards.svg'
import './style.css'

function CardNone (){
    return (
        <>
            <h2 className='none__transaction'>
                Você ainda não possui nenhum lançamento
            </h2>
        <div>
           <img className='img__noneValue' src={cardNones} alt=""  />
        </div>
        </>
    )
}
export default CardNone