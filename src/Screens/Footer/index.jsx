import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assents/Logo.png";
import Face from "../../assents/face.png";
import Insta from "../../assents/insta.png";
import Linke from "../../assents/linke.png";

export default function Footer() {
    return (
        <>
        <footer>
            <div className="ContainerFoo">
                <img className='logofooter' src={Logo} alt="Infinite"/>
                <div className="ContainerFoo--AtendimentoEhRedes">
                    <div className="Atendimento">
                        <h4>Atendimento</h4>
                        <p>Horário de atendimento: 08:00 as 19:00 - <br/>
                            Segunda a Sábado
                        </p>
                    </div>
                    <div >
                        <div>
                            <h4>Redes Sociais</h4>
                        </div>
                        <div className="RedesSociais">
                            <a href="#" className="icon"><img src={Face} alt="Infinite"/></a>
                            <a href="#" className="icon"><img src={Insta} alt="Infinite"/></a>
                            <a href="#" className="icon"><img src={Linke} alt="Infinite"/></a>
                        </div>
                    </div>
                </div>
                <div className="Contato">
                    <h4>Contato</h4>
                    <p>Email: Infinitegames@gmail.com<br/>
                    Telefone: (11) 98574-6558
                    </p>
                </div>
                
            </div>
        </footer>
        </>
    )
}