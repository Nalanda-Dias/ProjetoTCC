import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assents/LogoInfinite.png";
import Vector from "../../assents/Vector.png";
import Avatar from "../../assents/Avatar.png";
import LogoBg from "../../assents/logoBg.png";

import "./style.css";
import {
  BsHouseDoor,
  BsController,
  BsReverseLayoutTextWindowReverse,
  BsMouse2,
  BsDisplay,
  BsFillCartFill,
  BsFillHeartFill, 
  BsHeartFill,
} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Menu from "../SideBar";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useProduto } from "../../context/ProdutoProvider/useProduto";
import { Api } from "../../services/api";

export const Header = () => {
  const [sideBar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sideBar);
  const user = useAuth();
  const produto = useProduto();
  //const [produtos, setProdutos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
 
  

 
  async function PesquisaProduto(e, nome){
    e.preventDefault();

    const dados = await Api.get(`/Produto?nome=${nome}`);
    console.log("Api", dados);
    produto.setProdutos(dados.data.data);
    console.log("Produto", produto)
    console.log("Produto", produto.produtos)
  }
    

  

  return (
    <>
      <div className="ContainerNav">
        <nav className="NavInitial">
          <FaBars onClick={showSiderbar} />
          {sideBar && <SideBar active={setSidebar} />}
          <div>
            <img className="logo" src={Logo} alt="Infinite" />
          </div>
          <form className="form-inline">
            <div className="input-group search-box">
              <span className="input-group-btn">
                <button className="btn btn-secondary"  onClick={(e) => PesquisaProduto(e, pesquisa)}>
                  <img src={Vector} alt="Infinite" className="upa" />
          
                </button>
              </span>
              <input
              
                type="text"
                className="busque"
                placeholder="Busque aqui "
                aria-label="Search for..."
                onChange={e => setPesquisa(e.target.value)}
              />
            </div>
          </form>
          {user?.token ? (
            <div className="user">
              <img src={LogoBg} alt="Avatar" className="avatar" />
              <span className="userss" style={{color:"white"}}>
                Olá {user.nome.split(' ')[0]}
                <br />
                <a onClick={() => user.logout()} className="link">Sair</a>
              </span>
              <br/>
              <a href="/carrinho" className="link2">
                <BsFillCartFill />
              </a>
            </div>
          ) : (
            <div className="user">
              <img src={Avatar} alt="Avatar" className="avatar" />
              <a href="/" className="link">
                Faça login <br /> ou cadastre-se{" "}
              </a>
              <a href="/carrinho" className="link2">
                <BsFillCartFill />
              </a>
            </div>
          )}
        </nav>
      </div>

      <nav className="navbar">
        <div className="DivFunc">
          <a href="/home" className="links">
            <br />
            <BsHouseDoor />
            Home
          </a>
          <a href="/games" className="links">
            <BsController />
            Games
          </a>
          <a href="/hardware" className="links">
            <BsReverseLayoutTextWindowReverse />
            Hardware
          </a>
          <a href="/perifericos" className="links">
            <BsMouse2 />
            Periféricos
          </a>
          <a href="/pcs" className="links">
            <BsDisplay />
            Pcs
          </a>
        </div>

      </nav>
    </>
  );
};
