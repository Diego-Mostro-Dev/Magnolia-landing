import React from 'react'
import '../Assets/css/redes.css'
import { useLanguageContext } from '../LanguageContext';

export default function Redes() {
    const { getTraduccion } = useLanguageContext();
    const { title } = getTraduccion('redes');
    const { description } = getTraduccion('redes');
    return (
        <div title={description} className='redes'>
            <button>{title}</button>
        </div>
    )
}
