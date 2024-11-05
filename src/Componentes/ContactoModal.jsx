import React from 'react'
import '../Assets/css/contacto-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function ContactoModal() {
    const { cerrarModal } = useModalContext();
    const { getTraduccion } = useLanguageContext();
    const { titleModal } = getTraduccion('contacto');
    const { text } = getTraduccion('contacto');

    return (
        <div className='contacto-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <h1>form</h1>
            <h1>También podés encontrarnos acá:
                • mail (link)
                • whatsapp (link)
                • instagram (link)</h1>
        </div>
    )
}
