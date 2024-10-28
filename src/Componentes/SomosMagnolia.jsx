import React from 'react'
import "../Assets/css/somos-magnolia.css";
import ParentesisSomos from '../Assets/statics/Parantésis somos.svg';


export default function SomosMagnolia() {
    return (
        <>
            <div className="magnolia">
                <h1>Somos Magnolia</h1>
                <div className="parentesis-somos"><img src={ParentesisSomos} alt="" className="parentesis-somos" /></div>
            </div>
        </>
    )
}
