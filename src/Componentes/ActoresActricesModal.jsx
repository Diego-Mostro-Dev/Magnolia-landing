import React from 'react'
import '../Assets/css/actores-actrices-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function ActoresActricesModal() {
    const { getTraduccion } = useLanguageContext();
    const { cerrarModal } = useModalContext();
    const { titleModal } = getTraduccion('actoresActrices');
    const { text } = getTraduccion('actoresActrices');
    const { buttonText } = getTraduccion('actoresActrices')
    return (
        <div className='actores-actrices-modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <button className="actores-actrices-boton">{buttonText}</button>
        </div>
    )
}
