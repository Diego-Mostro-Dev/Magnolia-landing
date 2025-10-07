// ModalContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Estado inicial
const initialState = {
    seccionesHome: true,
    modalActivo: null,
};

// Acciones
const ABRIR_MODAL = 'ABRIR_MODAL';
const CERRAR_MODAL = 'CERRAR_MODAL';

// Reducer
function modalReducer(state, action) {
    switch (action.type) {
        case ABRIR_MODAL:
            return {
                seccionesHome: false,
                modalActivo: action.payload,
            };
        case CERRAR_MODAL:
            return initialState; // Estado inicial para cerrar el modal
        default:
            return state;
    }
}

// Crear contexto
const ModalContext = createContext();

// Hook personalizado para usar el contexto
export const useModalContext = () => useContext(ModalContext);

// Proveedor del contexto
export const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const abrirModal = (tipo) => dispatch({ type: ABRIR_MODAL, payload: tipo });
    const cerrarModal = () => dispatch({ type: CERRAR_MODAL });

    return (
        <ModalContext.Provider value={{ ...state, abrirModal, cerrarModal }}>
            {children}
        </ModalContext.Provider>
    );
};
