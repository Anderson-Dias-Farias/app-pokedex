'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

type NPokemon = {
    children:ReactNode
}

interface ContextProps {
    N: number,
    Filtro:string,
    setN: Dispatch<SetStateAction<number>>
    setFiltro: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    N: 0,
    Filtro:"",
    setN: function (value: SetStateAction<number>): void{} ,
    setFiltro: function (value: SetStateAction<string>): void{}
})

export const GlobalContextProvider = ({ children }:NPokemon) => {
   const [N, setN] = useState(0)
   const [Filtro , setFiltro] = useState("")
    
    return (
        <GlobalContext.Provider value={{ N, setN, setFiltro, Filtro }}>
            {children }
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);