import React from 'react';
import '../Assets/css/home.css';
import { Logo } from '../Assets/statics/Imagenes.jsx';
import SomosMagnolia from '../Componentes/SomosMagnolia.jsx';
import Trabajo from '../Componentes/Trabajo.jsx';
import Redes from '../Componentes/Redes.jsx';
import Productora from '../Componentes/Productora.jsx';
import Contacto from '../Componentes/Contacto.jsx';
import ActoresActrices from '../Componentes/ActoresActrices.jsx';



export default function Home() {
    console.log(Logo);
    return (
        <>
            <article className="home-grid">
                <section className="navbar">
                    <div className="logo"><Logo /></div>
                    <section className="botones-nav">
                        <button className="lorem1">Lorem</button>
                        <button className="lorem2">Lorem</button>
                    </section>
                </section>

                <section className="secciones-home">
                    <div className="somos-magnolia-home"><SomosMagnolia /></div>
                    <div className="productora-home"><Productora /></div>
                    <div className="trabajo-home"><Trabajo /></div>
                    <div className="actores-actrices-home"><ActoresActrices /></div>
                    <div className="contacto-home"><Contacto /></div>
                    <div className="redes-home"><Redes /></div>
                </section>


            </article>
        </>
    );
}
