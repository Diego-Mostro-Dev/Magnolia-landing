import React, { useState, useEffect, useRef } from 'react';
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
import { useLanguageContext } from '../LanguageContext.js';

// Importar imágenes PC
import HomePc1 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-1.webp';
import HomePc2 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-2.webp';
import HomePc3 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-3.webp';
import HomePc4 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-4.webp';
import HomePc5 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-5.webp';
import HomePc6 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-6.webp';
import HomePc7 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-7.webp';
import HomePc8 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-8.webp';
import HomePc9 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-9.webp';
import HomePc10 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-10.webp';
import HomePc11 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-11.webp';
import HomePc12 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-12.webp';
import HomePc13 from '../Assets/statics/FotosFondosMagnoliaPcNuevo/HomePcHorizontal-13.webp';

// Importar imágenes Mobile
import HomeMobile1 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-1.webp';
import HomeMobile2 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-2.webp';
import HomeMobile3 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-3.webp';
import HomeMobile4 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-4.webp';
import HomeMobile5 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-5.webp';
import HomeMobile6 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-6.webp';
import HomeMobile7 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-7.webp';
import HomeMobile8 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-8.webp';
import HomeMobile9 from '../Assets/statics/FotosFondosMagnoliaMobileNuevos/HomeMobileVertical-9.webp';

export default function Home() {
    const { seccionesHome, modalActivo, abrirModal, cerrarModal } = useModalContext();
    const { cambiarIdioma } = useLanguageContext();

    const fondosPc = [
        HomePc1, HomePc2, HomePc3, HomePc4, HomePc5, HomePc6, HomePc7, HomePc8, HomePc9,
        HomePc10, HomePc11, HomePc12, HomePc13,
    ];

    const fondosMobile = [
        HomeMobile1, HomeMobile2, HomeMobile3, HomeMobile4, HomeMobile5,
        HomeMobile6, HomeMobile7, HomeMobile8, HomeMobile9
    ];

    const [fondoActual, setFondoActual] = useState(fondosPc[0]);
    const [esMobile, setEsMobile] = useState(window.innerWidth <= 425);
    const fondosRef = useRef(esMobile ? fondosMobile : fondosPc);
    const indexRef = useRef(0);

    // Detectar cambio de tamaño y cambiar si es móvil o no
    useEffect(() => {
        function handleResize() {
            const isMobileNow = window.innerWidth <= 425;
            setEsMobile(isMobileNow);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const precargarImagenes = (imagenes) => {
        imagenes.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    useEffect(() => {
        fondosRef.current = esMobile ? fondosMobile : fondosPc;
        indexRef.current = 0;
        setFondoActual(fondosRef.current[0]);

        // Precargar las imágenes cuando cambia esMobile
        precargarImagenes(fondosRef.current);
    }, [esMobile]);

    useEffect(() => {
        let isMounted = true;

        const cambiarFondo = () => {
            const nextIndex = (indexRef.current + 1) % fondosRef.current.length;
            const nextImage = fondosRef.current[nextIndex];

            const img = new Image();
            img.src = nextImage;

            img.onload = () => {
                if (isMounted) {
                    indexRef.current = nextIndex;
                    setFondoActual(nextImage);
                }
            };
        };

        const interval = setInterval(cambiarFondo, 5000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);



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

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget && modalActivo) {
            cerrarModal();
        }
    };

    return (
        <>
            <article
                className="home-grid"
                onClick={handleClickOutside}
                style={{
                    backgroundImage: `url(${fondoActual})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: 'background-image 5s ease-in-out',
                }}
            >
                <section className="navbar" onClick={handleClickOutside}>
                    <div onClick={handleClickOutside}>
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
                <section className={seccionesHome ? 'secciones-home' : 'hidden'} onClick={handleClickOutside}>
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
