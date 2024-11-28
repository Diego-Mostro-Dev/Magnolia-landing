// Home.js
import React from 'react';
import '../Assets/css/home.css';
import Logo from '../Assets/statics/Logo.svg';
import SomosMagnolia from '../Componentes/SomosMagnolia.jsx';
import Trabajo from '../Componentes/Trabajo.jsx';
import Redes from '../Componentes/Redes.jsx';
import Productora from '../Componentes/Productora.jsx';
import Contacto from '../Componentes/Contacto.jsx';
import ActoresActrices from '../Componentes/ActoresActrices.jsx';
import SomosMagnoliaModal from '../Componentes/SomosMagnoliaModal.jsx';
import TrabajoModal from '../Componentes/TrabajoModal.jsx';
import RedesModal from '../Componentes/RedesModal.jsx';
import ProductoraModal from '../Componentes/ProductoraModal.jsx';
import ContactoModal from '../Componentes/ContactoModal.jsx';
import ActoresActricesModal from '../Componentes/ActoresActricesModal.jsx';
import { useModalContext } from '../ModalContext.js';
import { useLanguageContext } from '../LanguageContext.js'; // Importar el contexto de idioma

export default function Home() {
    const { seccionesHome, modalActivo, abrirModal } = useModalContext();
    const { cambiarIdioma } = useLanguageContext(); // Obtener la función para cambiar idioma y las traducciones

    const tipoModal = (prop) => {
        switch (prop) {
            case 'somosmagnolia':
                return <SomosMagnoliaModal />;
            case 'trabajo':
                return <TrabajoModal />;
            case 'redes':
                return <RedesModal />;
            case 'productora':
                return <ProductoraModal />;
            case 'contacto':
                return <ContactoModal />;
            case 'actoresactrices':
                return <ActoresActricesModal />;
            default:
                return null;
        }
    };

    return (
        <>
            <article className="home-grid">
                <section className="navbar">
                    <div>
                        <img className="logo" height={50} width={50} src={Logo} alt="Logo" />
                    </div>
                    <div className="wrapper-idioma-botones">
                        <section title="Idioma" className="botones-language">
                            <select id="language-select" onChange={(e) => cambiarIdioma(e.target.value)}>
                                <option value="es">ES</option>
                                <option value="en">EN</option>
                                <option value="pt">PT</option>
                            </select>
                        </section>
                    </div>
                </section>

                {/* Contenido principal */}
                <section className={seccionesHome ? 'secciones-home' : 'hidden'}>
                    <div className="somos-magnolia-home" onClick={() => abrirModal('somosmagnolia')}>
                        <SomosMagnolia />
                    </div>
                    <div className="productora-home" onClick={() => abrirModal('productora')}>
                        <Productora />
                    </div>
                    <div className="trabajo-home" onClick={() => abrirModal('trabajo')}>
                        <Trabajo />
                    </div>
                    <div className="actores-actrices-home" onClick={() => abrirModal('actoresactrices')}>
                        <ActoresActrices />
                    </div>
                    <div className="contacto-home" onClick={() => abrirModal('contacto')}>
                        <Contacto />
                    </div>
                    <div className="redes-home" onClick={() => abrirModal('redes')}>
                        <Redes />
                    </div>
                </section>

                {/* Modal */}
                <section className={!seccionesHome ? 'secciones-home-modal' : 'hidden'}>
                    {tipoModal(modalActivo)}
                </section>
            </article>
        </>
    );
}
