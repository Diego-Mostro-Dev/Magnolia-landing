import React from 'react'
import '../Assets/css/trabajo-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Centermode from './SliderTrabajo.jsx';



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
            <hr className='linea-modal' />
            <Centermode></Centermode>
        </div>
    )
}