import React from 'react'
import '../Assets/css/contacto-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';
import IconosRedes from './IconosRedes';

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
            <div></div>
            <h2>{textRedes}</h2>
            <div className='iconos-contacto-redes-modal'>
                <IconosRedes></IconosRedes>
            </div>
        </div>
    )
}
