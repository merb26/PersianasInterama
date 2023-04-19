import './scss/contact.css';

import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSending(true);

        const { REACT_APP_SERVICE_ID_EMAILJS, REACT_APP_TEMPLATE_ID_EMAILJS, REACT_APP_PUBLIC_KEY_EMAILJS } = process.env;

        const result = await emailjs.sendForm(
            REACT_APP_SERVICE_ID_EMAILJS,
            REACT_APP_TEMPLATE_ID_EMAILJS,
            form.current,
            REACT_APP_PUBLIC_KEY_EMAILJS
        );


        setIsSending(false);

        if (result.status === 200) {
            toast.success('Ha enviado los datos con éxito!', { duration: 6000 });
            form.current.reset();
            setPhoneNumber('')
        } else {
            toast.error('Error al enviar datos, favor de contactar con Interama', { duration: 6000 });
        }
    };

    return (
        <div className="contact_container container d-flex flex-column justify-content-center align-items-center">
            <h2 className="m-4">Contacto</h2>
            <form
                className="contact_container__form d-flex flex-column justify-content-center align-items-center p-sm-5 p-3 text-white"
                ref={form}
                onSubmit={handleSubmit}
            >
                <div className="mb-3 w-100">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input type="text" name="name" id="name" className="form-control" required />
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="last_name" className="form-label">
                        Apellido
                    </label>
                    <input type="text" name="last_name" id="last_name" className="form-control" required />
                </div>
                <div className="mb-3 w-100">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3 w-100">
                    <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                </div>
                <button className="btn btn-dark mt-4 w-50" type="submit" disabled={isSending}>
                    {isSending ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};


function PhoneNumberInput({ phoneNumber, setPhoneNumber }) {

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
        <>
            <label htmlFor='phone' className='form-label'>Teléfono</label>
            <input type="phone" name="phone" id="phone" className='form-control' value={phoneNumber}
                onChange={handlePhoneNumberChange} required />
            {!isValidPhoneNumber && (
                <div style={{ color: 'red' }}>El número de teléfono es inválido, son 10 dígitos.</div>
            )}
        </>
    );
}

export default Contact