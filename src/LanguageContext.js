// LanguageContext.js
import React, { createContext, useReducer, useContext } from 'react';
import translations from './language/translations.json';

// Estado inicial
const initialState = {
    idioma: 'es', // Idioma inicial (español)
};

// Acciones
const CAMBIAR_IDIOMA = 'CAMBIAR_IDIOMA';

// Reducer
function languageReducer(state, action) {
    switch (action.type) {
        case CAMBIAR_IDIOMA:
            return {
                ...state,
                idioma: action.payload, // Cambia el idioma
            };
        default:
            return state;
    }
}

// Crear contexto
const LanguageContext = createContext();

// Hook personalizado para usar el contexto
export const useLanguageContext = () => useContext(LanguageContext);

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(languageReducer, initialState);

    // Función para cambiar el idioma
    const cambiarIdioma = (nuevoIdioma) => dispatch({ type: CAMBIAR_IDIOMA, payload: nuevoIdioma });

    // Obtener traducciones basadas en el idioma actual
    const getTraduccion = (clave) => {
        const { idioma } = state;
        return translations[idioma]?.[clave] || {};
    };

    return (
        <LanguageContext.Provider value={{ ...state, cambiarIdioma, getTraduccion }}>
            {children}
        </LanguageContext.Provider>
    );
};
