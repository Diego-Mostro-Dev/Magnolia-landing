import React from 'react';
import '../Assets/css/actores-actrices.css';
import { useLanguageContext } from '../LanguageContext';

export default function ActoresActrices() {
    const { getTraduccion } = useLanguageContext();
    const { titleActors, titleActresses } = getTraduccion('actoresActrices');
    const { description } = getTraduccion('actoresActrices');

    return (
        <>
            <div title={description} className="actores-actrices">
                {titleActors} <br /> {titleActresses}
            </div>
        </>
    );
}
