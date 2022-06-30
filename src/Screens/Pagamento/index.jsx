import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { BsFillXDiamondFill, BsUpc, BsFillCreditCardFill } from "react-icons/bs";

const pagamento = () => {
    return (

        <>
        <div className='DivButtons'>
            <button className='button06'><BsFillXDiamondFill/> PIX</button>
            <br/>
            <a href='/boleto'><button className='button07'><BsUpc/>  BOLETO</button></a>
            <br/>
            <a href='/cartao'><button className='button08'><BsFillCreditCardFill/> CARTÃO DE CRÉDITO</button></a>
        </div>
        <div className='Pix'>
            <h3 className='Pix'>Pix</h3>
            <p className='PixText'>"O Pix é um meio eletrônico e instantâneo de pagamentos e transferências bancárias que foi criado 
                pelo Banco Central do Brasil. Transações bancárias podem ser feitas pelo celular a qualquer hora e 
                dia, a partir de conta-corrente, poupança ou de pagamento."</p>
        </div>
        <div className='Total02'>
            <p className='Total03'>TOTAL A PAGAR: <br/> R$ 3000,00</p>
        </div>
        <div>
        <a href="/carrinho"><button className='button09'>VOLTAR</button></a>
            <a href='/confcompra'><button className='button10'>PAGAR COM PIX</button></a>
        </div>
        </>
    )
}

export default pagamento