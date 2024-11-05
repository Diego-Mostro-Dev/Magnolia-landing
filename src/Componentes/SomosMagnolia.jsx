import React from 'react';
import "../Assets/css/somos-magnolia.css";
import ParentesisSomos from '../Assets/statics/Parantésis somos.svg';
import { useLanguageContext } from '../LanguageContext'; // Importa el contexto de idioma

export default function SomosMagnolia() {
    const { getTraduccion } = useLanguageContext(); // Usar el contexto de idioma para obtener la traducción

    // Obtener la traducción del título
    const { title } = getTraduccion('SomosMagnolia');
    const { description } = getTraduccion('SomosMagnolia');

    return (
        <>
            <div title={description} className="magnolia">
                <h1 >{title}</h1>
                <div className="parentesis-somos">
                    <img height={50} width={50} src={ParentesisSomos} alt="Paréntesis Somos" className="parentesis-somos" />
                </div>
            </div>
        </>
    );
}
