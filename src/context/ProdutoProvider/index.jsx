import React, { useState, createContext } from 'react'

export const ProdutoContext = createContext();

export const ProdutoProvider = ({children}) =>{

    const [produtos, setProdutos] = useState([]);

    return (
    <ProdutoContext.Provider value={{produtos, setProdutos}}>
        {children}
    </ProdutoContext.Provider>
    )
}

