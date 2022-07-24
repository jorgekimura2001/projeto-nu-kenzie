import './style.css'
import nukenzie from '../../assets/nu-kenzie.svg'

function Header({setIsEnter}){

    function handleToExit(){
        setIsEnter(false)
    }

    return (
        <header>
            <img src={nukenzie} alt="Logo NuKenzie" className='logo' />
            <button onClick={handleToExit} className='btn__home'>Início</button>
        </header>
    )
}
export default Header