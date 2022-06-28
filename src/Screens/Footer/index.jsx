import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assents/LogoInfinite.png";
import Face from "../../assents/face.png";
import Insta from "../../assents/insta.png";
import Linke from "../../assents/linke.png";

export default function Footer() {
    return (
        <>
        <footer>
            <img className='logofooter' src={Logo} alt="Infinite"/>
            <div class="Atendimento">
                <h4>Atendimento</h4>
                <p>Horário de atendimento: 08:00 as 19:00 - <br/>
                    Segunda a Sábado
                </p>
            </div>
            <div class="RedesSociais">
                <h4>Redes Sociais</h4>
                <a href="#" class="icon"><img src={Face} alt="Infinite"/></a>
                <a href="#" class="icon"><img src={Insta} alt="Infinite"/></a>
                <a href="#" class="icon"><img src={Linke} alt="Infinite"/></a>
            </div>
            <div class="Contato">
                <h4>Contato</h4>
                <p>Email: Infinitegames@gmail.com<br/>
                Telefone: (11) 98574-6558
                </p>
            </div>
        </footer>
        </>
    )
}