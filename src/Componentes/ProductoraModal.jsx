import React from 'react'
import '../Assets/css/productora-modal.css'
import { useModalContext } from '../ModalContext';

export default function ProductoraModal() {
    const { cerrarModal } = useModalContext();
    return (
        <div className='productora-Modal'><h1>Productora</h1>
            <button onClick={cerrarModal}>x</button>
        </div>
    )
}
