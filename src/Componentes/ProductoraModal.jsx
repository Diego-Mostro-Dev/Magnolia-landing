import React from 'react'
import '../Assets/css/productora-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function ProductoraModal() {
    const { getTraduccion } = useLanguageContext();
    const { cerrarModal } = useModalContext();
    const { titleModal } = getTraduccion('productora');
    const { text } = getTraduccion('productora');
    const { buttonText } = getTraduccion('productora')
    return (
        <div className='productora-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <button className="productora-boton">{buttonText}</button>
        </div>
    )
}
