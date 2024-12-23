import React from 'react'
import '../Assets/css/contacto-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';
import IconosContacto from './IconosContacto';

export default function ContactoModal() {
    const { cerrarModal } = useModalContext();
    const { getTraduccion } = useLanguageContext();
    const { titleModal } = getTraduccion('contacto');
    const { textContact1, textContact2, textContact3 } = getTraduccion('contacto');
    const { textRedes } = getTraduccion('contacto');

    const titleModalSinBr = titleModal.replace(/<br\s*\/?>/gi, ' ');



    return (
        <div className='contacto-Modal'>
            <button onClick={cerrarModal}></button>
            <h1 dangerouslySetInnerHTML={{ __html: titleModal }} className='contacto-Modal-h1-br' ></h1>
            <h1 className='contacto-Modal-h1-sin-br' >{titleModalSinBr}</h1>
            <p>{textContact1} <a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeRMp9O2s7_DGOJF6qkVsglVAvnF2Pue62v4buPQHKJdKAmug/viewform">{textContact2}</a> {textContact3}</p>
            <div></div>
            <h2>{textRedes}</h2>
            <div className='iconos-contacto-contacto-modal'>
                <IconosContacto></IconosContacto>
            </div>
        </div>
    )
}
