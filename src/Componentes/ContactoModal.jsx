import React from 'react'
import '../Assets/css/contacto-modal.css'
import { useModalContext } from '../ModalContext';

export default function ContactoModal() {
    const { cerrarModal } = useModalContext();
    return (
        <div className='contacto-Modal'>
            <h1>Contacto</h1>
            <button onClick={cerrarModal}>x</button>
        </div>
    )
}
