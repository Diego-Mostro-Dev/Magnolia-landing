import React from 'react';
import '../Assets/css/home.css';
import { IconoHome } from '../Assets/Icons/Icons';
import {
    ContenedorRedes,
    Cruztrabajo,
    FlechaContacto,
    LineasTrabajo,
    Logo,
    SeccionContacto,
    ParentesisProductora,
    ParentesisSomos,
    SeccionActores,
    SeccionProductora,
    SeccionRedes,
    SeccionSomos,
    SeccionTrabajo
} from '../Assets/statics/Imagenes.jsx';



export default function Home() {
    return (
        <>
            <div><IconoHome /></div>
            <div><Logo /></div>
            <div><ContenedorRedes /></div>
            <div><Cruztrabajo /></div>
            <div><FlechaContacto /></div>
            <div><LineasTrabajo /></div>
            <div><ParentesisProductora /></div>
            <div><ParentesisSomos /></div>
            <div><SeccionActores /></div>
            <div><SeccionContacto /></div>
            <div><SeccionProductora /></div>
            <div><SeccionRedes /></div>
            <div><SeccionSomos /></div>
            <div><SeccionTrabajo /></div>

        </>
    );
}
