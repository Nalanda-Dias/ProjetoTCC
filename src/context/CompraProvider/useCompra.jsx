import { useContext } from "react"
import { CompraContext } from "."

export const useCompra = () =>{
    const context = useContext(CompraContext);
    return context;
}