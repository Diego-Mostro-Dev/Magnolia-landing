import React from 'react'
import '../Assets/css/contacto.css'
import FlechaContacto from '../Assets/statics/Flecha contacto.svg';

export default function Contacto() {
    return (
        <>
            <div className="contacto">
                <h1>Contacto</h1>
                <img height={50} width={50} src={FlechaContacto} alt="flecha de contacto" />
            </div>
        </>
    )
}
