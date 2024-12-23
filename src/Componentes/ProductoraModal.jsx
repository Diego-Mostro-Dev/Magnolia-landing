import React from 'react'
import '../Assets/css/productora-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function ProductoraModal() {
    const { getTraduccion } = useLanguageContext();
    const { cerrarModal } = useModalContext();
    /* const { titleModal } = getTraduccion('productora'); */
    const { text } = getTraduccion('productora');
    const { buttonText } = getTraduccion('productora')
    const { titleModal } = getTraduccion('productora');
    return (
        <div className='productora-Modal'>
            <button onClick={cerrarModal}></button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <button className="productora-boton"><a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeRMp9O2s7_DGOJF6qkVsglVAvnF2Pue62v4buPQHKJdKAmug/viewform">{buttonText}</a></button>
        </div>
    )
}
