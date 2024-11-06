import React from 'react'
import '../Assets/css/trabajo-modal.css'
import { useModalContext } from '../ModalContext';
import { useLanguageContext } from '../LanguageContext';
import DSC03595r from '../Assets/statics/FotosMangnolia/DSC03595r.webp';
import DSC03629r from '../Assets/statics/FotosMangnolia/DSC03629r.webp';

export default function TrabajoModal() {
    const { cerrarModal } = useModalContext();
    const { getTraduccion } = useLanguageContext();
    const { titleModal } = getTraduccion('trabajos');
    const { text } = getTraduccion('trabajos');
    return (
        <div className='trabajo-Modal'>
            <button onClick={cerrarModal}>x</button>
            <h1>{titleModal}</h1>
            <p>{text}</p>
            <section>
                <img height={100} width={50} src={DSC03629r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03629r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03629r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03629r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
            </section>
        </div>
    )
}
