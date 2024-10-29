import React from 'react'
import '../Assets/css/trabajo.css'
import LineasTrabajo from '../Assets/statics/Lineas trabajo.svg';
import CruzTrabajo from '../Assets/statics/Cruz trabajo.svg';

export default function Trabajo() {
    return (
        <>
            <div className="trabajo">
                <div className='cruz'><img height={50} width={50} src={CruzTrabajo} alt="Imagen Cruz-trabajo" /></div>
                <h1>Trabajos</h1>
                <div className='lineas'><img height={50} width={50} src={LineasTrabajo} alt="Imagen Lineas trabajo" /></div>
            </div>
        </>

    )
}
