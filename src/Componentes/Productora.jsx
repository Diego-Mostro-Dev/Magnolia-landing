import React from 'react'
import '../Assets/css/productora.css'
import ParentesisProductora from '../Assets/statics/Parantesis-productora.svg';
import { useLanguageContext } from '../LanguageContext';

export default function Productora() {
    const { getTraduccion } = useLanguageContext();
    const { title } = getTraduccion('productora');
    const { description } = getTraduccion('productora');
    return (
        <>
            <div title={description} className="productora" >
                <div className="parentesis-productora"><img loading='lazy' height={50} width={50} src={ParentesisProductora} alt="" /></div>
                <h1>{title}</h1>
            </div>
        </>
    )
}
