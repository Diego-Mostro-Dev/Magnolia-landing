import React from 'react'
import '../Assets/css/trabajo-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function TrabajoModal() {
    const { cerrarModal } = useModalContext();
    const { getTraduccion } = useLanguageContext();
    const { titleModal } = getTraduccion('trabajos');
    const { text } = getTraduccion('trabajos');
    return (
        <div className='trabajo-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <div>Carrusel</div>
        </div>
    )
}
