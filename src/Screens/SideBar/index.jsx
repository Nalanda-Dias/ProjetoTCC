import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../assents/Avatar.png"
import { BsFillPersonFill, BsCart, BsHeartFill, BsGraphUp } from "react-icons/bs";

const Menu = () => {
    return (

        <>
        
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li class="menu__item"><img src={Avatar} alt="Avatar" className="avatar1" />Olá Kratos</li>
                    <li className='itemmenu'><a class="menu__item" href="#"><BsFillPersonFill/>Minha conta</a></li>
                    <li className='itemmenu'><a class="menu__item" href="#"><BsCart/>Meus pedidos</a></li>
                    <li className='itemmenu'><a class="menu__item" href="#"><BsHeartFill/>Favoritos</a></li>
                    <li className='itemmenu'><a class="menu__item" href="#"><BsGraphUp/>Dashoard</a></li>
                </ul>
            </div>
        </>
    )
}

export default Menu