import React from 'react'
import '../Assets/css/redes-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function RedesModal() {
    const { getTraduccion } = useLanguageContext();
    const { cerrarModal } = useModalContext();
    const { titleModal } = getTraduccion('redes');
    const { text } = getTraduccion('redes');
    return (
        <div className='redes-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <div>Redes sociales iconos con link</div>
        </div>
    )
}
