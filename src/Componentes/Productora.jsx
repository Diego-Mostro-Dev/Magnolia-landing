import React from 'react'
import '../Assets/css/productora.css'
import ParentesisProductora from '../Assets/statics/Parantésis productora.svg';

export default function Productora() {
    return (
        <>
            <div className="productora" >
                <div className="parentesis-productora"><img height={50} width={50} src={ParentesisProductora} alt="" /></div>
                <h1>Productora</h1>
            </div>
        </>
    )
}
