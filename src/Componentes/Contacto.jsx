import React from 'react'
import '../Assets/css/contacto.css'
import FlechaContacto from '../Assets/statics/Flecha-contacto.svg';
import { useLanguageContext } from '../LanguageContext';

export default function Contacto() {
    const { getTraduccion } = useLanguageContext();
    const { title } = getTraduccion('contacto');
    const { description } = getTraduccion('contacto');
    return (
        <>
            <div title={description} className="contacto">
                <h1>{title}</h1>
                <img loading='lazy' height={50} width={50} src={FlechaContacto} alt="flecha de contacto" />
            </div>
        </>
    )
}
