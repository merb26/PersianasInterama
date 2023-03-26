import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
        <>
            <nav className="menu d-flex flex-column flex-sm-row justify-content-around align-items-center  fixed-top">
                <Link to='/'>
                    <img className='menu__logo' src="./assets/titulo.png" alt="Logotipo de la empresa" />
                </Link>
                <Link to='/contactanos'>
                    <button className='btn btn-dark mb-2 mb-sm-0'>!Contáctanos aquí!</button>
                </Link>
            </nav>
        </>
    )
}

export default Menu