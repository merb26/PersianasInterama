import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
        <>
            <nav className="menu d-flex justify-content-around align-items-center fixed-top">
                <Link to='/'>
                    <img className='menu__logo' src="./assets/titulo.png" alt="Logotipo de la empresa" />
                </Link>
                <Link to='/contactanos'>
                    <button className='btn btn-outline-dark'>!Contáctanos aquí!</button>
                </Link>
            </nav>
        </>
    )
}

export default Menu