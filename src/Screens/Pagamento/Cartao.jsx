import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { BsFillXDiamondFill, BsUpc, BsFillCreditCardFill } from "react-icons/bs";

const cartao = () => {
    return (

        <>
        <div className='DivButtons'>
        <a href='/pagamento'><button className='button15'><BsFillXDiamondFill/> PIX</button></a>
            <br/>
            <a href='/boleto'><button className='button16'><BsUpc/>  BOLETO</button></a>
            <br/>
            <button className='button17'><BsFillCreditCardFill/> CARTÃO DE CRÉDITO</button>
        </div>
        <div className='Pix'>
            <h3 className='Pix'>Cartão de Crédito</h3>
            <p className='PixText'>"Cartão de crédito é uma forma de pagamento eletrônico. É um cartão de plástico 
            que pode conter ou não um chip e apresenta na frente o nome do portador, número do cartão e data de 
            validade (pelo menos) e, no verso, um campo para assinatura do cliente, o número de segurança (CVV2) e 
            a tarja magnética (geralmente preta)."</p>
        </div>
        <div className='Total02'>
            <p className='Total03'>TOTAL A PAGAR: <br/> R$ 3000,00</p>
        </div>
        <div>
        <a href="/carrinho"><button className='button09'>VOLTAR</button></a>
            <a href='/confcompra'><button className='button18'>PAGAR COM CARTÃO</button></a>
        </div>
        </>
    )
}

export default cartao