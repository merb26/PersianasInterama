import './menu.css'

const Menu = () => {
    return (
        <>
            <div className="menu d-flex justify-content-around align-items-center">
                <img className='menu__logo' src="./assets/titulo.png" alt="Logotipo de la empresa" />
                <button className='btn btn-outline-dark'>Haz tu cotización aquí</button>
            </div>
        </>
    )
}

export default Menu