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
            <button className="cruz-modal-actores-actrices" onClick={cerrarModal}></button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <div className="wrapper-actores-actrices">
                <button className="actores-actrices-boton"><a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeRMp9O2s7_DGOJF6qkVsglVAvnF2Pue62v4buPQHKJdKAmug/viewform" className="formulario-actores-actrices">{buttonText}</a></button>
            </div>
        </div>
    )
}
