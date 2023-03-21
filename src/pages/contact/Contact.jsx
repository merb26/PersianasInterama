import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './scss/contact.css'
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID_EMAILJS,
            process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY_EMAILJS
        )
            .then((result) => {
                toast.success('Ha enviado los datos con éxito!', { duration: 6000 })

                document.querySelector('#name').value = ''
                document.querySelector('#last_name').value = ''
                document.querySelector('#email').value = ''
                document.querySelector('#phone').value = ''

            }, (error) => {
                toast.error("Error al enviar datos, favor de contactar con Interama", { duration: 6000 })
            });
    };
    return (
        <>
            <div className="contact_container container d-flex flex-column justify-content-center align-items-center">
                <h2 className='m-4'>Contacto</h2>
                <form
                    className='contact_container__form d-flex flex-column justify-content-center align-items-center p-5 text-white'
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <div className='mb-3 w-100'>
                        <label for="name" className='form-label'>Nombre</label>
                        <input type="text" name="name" id="name" className='form-control' required />
                    </div>
                    <div className='mb-3 w-100'>
                        <label htmlFor='last_name' className='form-label'>Apellido</label>
                        <input type="text" name="last_name" id="last_name" className='form-control' required />
                    </div>
                    <div className='mb-3 w-100'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type="email" name="email" id="email" className='form-control' required />
                    </div>
                    <div className='mb-3 w-100'>
                        <PhoneNumberInput />
                    </div>
                    <button className='btn btn-dark mt-4 w-50' type='submit'>Enviar</button>
                </form>

            </div>
        </>
    )
}

function PhoneNumberInput() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneRegex = /^[1-9]{1}\d{9}$/;

    function validatePhoneNumber(phoneNumber) {
        return phoneRegex.test(phoneNumber);
    }

    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

    function handlePhoneNumberChange(event) {
        const value = event.target.value;
        setPhoneNumber(value);
        setIsValidPhoneNumber(validatePhoneNumber(value));
    }

    return (
        <div>
            <label htmlFor='phone' className='form-label'>Teléfono</label>
            <input type="phone" name="phone" id="phone" className='form-control' value={phoneNumber}
                onChange={handlePhoneNumberChange} required />
            {!isValidPhoneNumber && (
                <div style={{ color: 'red' }}>El número de teléfono es inválido, son 10 dígitos.</div>
            )}
        </div>
    );
}







export default Contact