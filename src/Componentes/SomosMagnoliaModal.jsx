import React from 'react';
import '../Assets/css/somos-magnolia-modal.css';
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';

export default function SomosMagnoliaModal() {
    const { getTraduccion } = useLanguageContext();
    const { cerrarModal } = useModalContext();
    const { text } = getTraduccion('SomosMagnolia');

    return (
        <div className='somos-magnolia-modal'>
            <button onClick={cerrarModal}></button>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    );
}
