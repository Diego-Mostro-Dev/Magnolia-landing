import React from 'react'
import '../Assets/css/redes-modal.css'
import { useModalContext } from '../ModalContext';

export default function RedesModal() {
    const { cerrarModal } = useModalContext();
    return (
        <div className='redes-Modal'>
            <h1>Redes</h1>
            <button onClick={cerrarModal}>x</button>
        </div>
    )
}
