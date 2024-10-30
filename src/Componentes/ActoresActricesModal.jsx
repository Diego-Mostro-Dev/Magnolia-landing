import React from 'react'
import '../Assets/css/actores-actrices-modal.css'
import { useModalContext } from '../ModalContext';

export default function ActoresActricesModal() {
    const { cerrarModal } = useModalContext();
    return (
        <div className='actores-actrices-modal'>
            <h1>ActoresActricesModal</h1>
            <button onClick={cerrarModal}>x</button>
        </div>
    )
}
