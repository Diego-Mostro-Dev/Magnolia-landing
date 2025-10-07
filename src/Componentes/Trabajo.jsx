import React from 'react'
import '../Assets/css/trabajo.css'
/* import LineasTrabajo from '../Assets/statics/Lineas trabajo.svg'; */
import CruzTrabajo from '../Assets/statics/Cruz-trabajo.svg';
import { useLanguageContext } from '../LanguageContext';

export default function Trabajo() {
    const { getTraduccion } = useLanguageContext();
    const { title } = getTraduccion('trabajos');
    const { description } = getTraduccion('trabajos');
    return (
        <>
            <div title={description} className="trabajo">
                <div className='cruz'><img loading='lazy' height={50} width={50} src={CruzTrabajo} alt="Imagen Cruz-trabajo" /></div>
                <h1>{title}</h1>
            </div>
        </>

    )
}
