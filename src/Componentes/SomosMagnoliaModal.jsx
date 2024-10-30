import React from 'react';
import '../Assets/css/somos-magnolia-modal.css';
import { useModalContext } from '../ModalContext';

export default function SomosMagnoliaModal() {
    const { cerrarModal } = useModalContext();

    return (
        <div className='somos-magnolia-modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>Somos Magnolia modal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, id ducimus? Asperiores, eum? Possimus dolorem, placeat ullam nam animi veniam eius accusantium distinctio tempora, earum, quis odio cupiditate dolore accusamus!</p>
        </div>
    );
}
