import React from 'react';
import '../Assets/css/somos-magnolia-modal.css';
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function SomosMagnoliaModal() {
    const { getTraduccion } = useLanguageContext();
    const { cerrarModal } = useModalContext();
    const { titleModal } = getTraduccion('SomosMagnolia');
    const { text } = getTraduccion('SomosMagnolia');

    return (
        <div className='somos-magnolia-modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
        </div>
    );
}
