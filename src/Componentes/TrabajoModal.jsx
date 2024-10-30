import React from 'react'
import '../Assets/css/trabajo-modal.css'
import { useModalContext } from '../ModalContext';

export default function TrabajoModal() {
    const { cerrarModal } = useModalContext();
    return (
        <div className='trabajo-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>Trabajos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, id ducimus? Asperiores, eum? Possimus dolorem, placeat ullam nam animi veniam eius accusantium distinctio tempora, earum, quis odio cupiditate dolore accusamus!</p>
        </div>
    )
}
