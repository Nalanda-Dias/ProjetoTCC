import { useContext } from "react";
import { ProdutoContext } from ".";

export const useProduto = () => {
    const context = useContext(ProdutoContext)
    console.log(context)
    return context;
}