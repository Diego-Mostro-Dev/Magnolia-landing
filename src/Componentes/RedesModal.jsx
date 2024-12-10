import React from 'react'
import '../Assets/css/redes-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';
import IconosRedes from './IconosRedes';


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
            <IconosRedes></IconosRedes>
        </div>
    )
}
