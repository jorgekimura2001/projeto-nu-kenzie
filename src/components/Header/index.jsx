import './style.css'
import nukenzie from '../../assets/nu-kenzie.svg'

function Header(){
    return (
        <header>
            <img src={nukenzie} alt="Logo NuKenzie" className='logo' />
            <button className='btn__home'>Início</button>
        </header>
    )
}
export default Header