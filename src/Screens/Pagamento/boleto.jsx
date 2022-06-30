import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { BsFillXDiamondFill, BsUpc, BsFillCreditCardFill } from "react-icons/bs";

const boleto = () => {
    return (

        <>
        <div className='DivButtons'>
        <a href='/pagamento'><button className='button12'><BsFillXDiamondFill/> PIX</button></a>
            <br/>
            <button className='button13'><BsUpc/>  BOLETO</button>
            <br/>
            <a href='/cartao'><button className='button08'><BsFillCreditCardFill/> CARTÃO DE CRÉDITO</button></a>
        </div>
        <div className='Pix'>
            <h3 className='Pix'>Boleto</h3>
            <p className='PixText'>"O Boleto bancário, também conhecido como boleto de cobrança, é utilizado como 
            uma forma de pagamento por meio de uma negociação comercial. O emissor (cedente ou beneficiário) usa 
            esse recurso para receber o dinheiro referente ao produto ou à um serviço."</p>
        </div>
        <div className='Total02'>
            <p className='Total03'>TOTAL A PAGAR: <br/> R$ 3000,00</p>
        </div>
        <div>
        <a href="/carrinho"><button className='button09'>VOLTAR</button></a>
            <a href='/confcompra'><button className='button14'>PAGAR COM  BOLETO</button></a>
        </div>
        </>
    )
}

export default boleto