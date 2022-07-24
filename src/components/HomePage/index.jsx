import nuKenzie from '../../assets/nu-kenzie-white.svg'
import layout from '../../assets/image.svg'
import './style.css'


function HomePage ({setIsEnter}){

    function handleToHome(){
        setIsEnter(true)
    }
    
    return(
        <div className='homepage'>
            <div className='info__home'>
                <img src={nuKenzie} alt="Logo NuKenzie" />
                <h2 className='title__main'>Centralize o controle das suas finanças</h2>
                <span className='subtitle'>de forma rápida e segura</span>
                <button onClick={handleToHome} className='btn__to-homepage'>Iniciar</button>
            </div>
            <div className='layout'>
                <div style={{
                    background: `url(${layout})`,
                    width: '37.063rem',
                    height: '37.063rem',
                }}>
                </div>
            </div>
           
        </div>
    )
}
export default HomePage