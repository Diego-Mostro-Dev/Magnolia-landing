import React from 'react'
import '../Assets/css/contacto-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';
import Instagram from '../Assets/statics/instagram.svg';
import Whatsapp from '../Assets/statics/whatsapp.svg';
import X from '../Assets/statics/x.svg';

export default function ContactoModal() {
    const { cerrarModal } = useModalContext();
    const { getTraduccion } = useLanguageContext();
    const { titleModal } = getTraduccion('contacto');
    const { text } = getTraduccion('contacto');
    const { textRedes } = getTraduccion('contacto');

    return (
        <div className='contacto-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <h1>form</h1>
            <div className="wrapper-contacto-redes">
                <h1>{textRedes}</h1>
                <div className="contacto-redes">
                    <img height={50} width={50} src={Instagram} alt="Instagram" />
                    <img height={50} width={50} src={Whatsapp} alt="Whatsapp" />
                    <img height={50} width={50} src={X} alt="X" />
                </div>
            </div>
        </div>
    )
}
