import './menu.css'

const Menu = () => {
    return (
        <>
            <nav className="menu d-flex justify-content-around align-items-center fixed-top">
                <img className='menu__logo' src="./assets/titulo.png" alt="Logotipo de la empresa" />
                <button className='btn btn-outline-dark'>!Contáctanos aquí!</button>
            </nav>
        </>
    )
}

export default Menu