import React from 'react'
import '../Assets/css/iconos-redes.css'
import Instagram from '../Assets/statics/BotonInstagram.webp';
import Whatsapp from '../Assets/statics/BotonWhatsapp.webp';
import correo from '../Assets/statics/BotonMail.webp';

export default function IconosRedes() {
    return (
        <>
            <div className="iconos-redes-redes">
                <a href="https://www.instagram.com/magnolia_casting" rel="noopener noreferrer" target='_blank'><img height={50} width={50} src={Instagram} alt="Instagram" /></a>
                <a href="https://wa.me/5493413301861?text=Hola%20Magnolia." rel="noopener noreferrer" target='_blank'><img height={50} width={50} src={Whatsapp} alt="Whatsapp" /></a>
                <a href="mailto:info@magnoliacasting.com" rel="noopener noreferrer" target='_blank'><img height={50} width={50} src={correo} alt="correo" /></a>
            </div>
        </>
    )
}
