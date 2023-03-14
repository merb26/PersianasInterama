import './scss/contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact_container container d-flex flex-column justify-content-center align-items-center">
                <h2 className='m-4'>Contacto</h2>
                <form className='contact_container__form d-flex flex-column justify-content-center align-items-center p-5 text-white'>
                    <div className='mb-3 w-100'>
                        <label htmlFor='name' className='form-label'>Nombre</label>
                        <input type="text" name="name" id="name" className='form-control' />
                    </div>
                    <div className='mb-3 w-100'>
                        <label htmlFor='last_name' className='form-label'>Apellido</label>
                        <input type="text" name="last_name" id="last_name" className='form-control' />
                    </div>
                    <div className='mb-3 w-100'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type="email" name="email" id="email" className='form-control' />
                    </div>
                    <div className='mb-3 w-100'>
                        <label htmlFor='phone' className='form-label'>Teléfono</label>
                        <input type="phone" name="phone" id="phone" className='form-control' />
                    </div>
                    <button className='btn btn-dark mt-4 w-50'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contact