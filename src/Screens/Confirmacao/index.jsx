import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import img1 from "../../assents/check.png";

const confcompra = () => {
    return (

        <>
        <div className="containerConf">
            <img src={img1} className="Check" />
            <p className='legendaCompra'>COMPRA FINALIZADA! <br/> ENVIAMOS MAIS ONFORMAÇÕES NO EMAIL CADASTRADO</p>
            <button className='button11'>CONTINUAR</button>
        </div>
        </>
    )
}

export default confcompra