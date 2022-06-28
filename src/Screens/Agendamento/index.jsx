import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import img1 from "../../assents/agendamento.png";
import img2 from "../../assents/gtaV.jpg";
import { BsXLg } from "react-icons/bs";

const Agendamento = () => {
    return (

        <>
            <div>
                <img className='imagendamento' src={img1}></img>
                <p className='legendaAgenda'>Agende seu teste e experiemente <br /> antes de comprar!</p>
                <button className='agenda'>AGENDAR</button>
            </div>
           
            <div>
                <p className='agendaAtual'>Agendamento Atual:</p>
                
                <div>
                    <img className='imgagenda' src={img2}></img>
                    <p className='LegAgenda'>GTA V</p>
                </div>
                <div>
                    <section className='quando'>Quando: <br />12/05/22</section>
                    <div className='cancelar'>
                    <section className='iconeCancelar'><BsXLg/></section>
                    <button className='buttonCancelar'>Cancelar</button>
                    <button className='informacoes'>Mais <br/> informações</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Agendamento
