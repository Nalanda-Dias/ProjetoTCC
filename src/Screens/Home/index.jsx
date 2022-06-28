import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./style.css";
import img1 from "../../assents/consoles.png";
import img2 from "../../assents/dogs.png";
import img3 from "../../assents/eldenRing.png";
import img8 from "../../assents/gtaBanner.png";
import img9 from "../../assents/bannerBatman.png";
import img10 from "../../assents/BannerTeste.png";
import img11 from "../../assents/catFpd.png";
import img12 from "../../assents/catRpg.png";
import img13 from "../../assents/catSouls.png";
import img14 from "../../assents/catPerifericos.png";
import img15 from "../../assents/CatPc.png";
import img16 from "../../assents/CatConsole.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsCart } from "react-icons/bs";
import { Produto, ProdutoBotao, ProdutoImagem, ProdutoTexto } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { Api } from "../../services/api";

function Home() {
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    async function buscaTop5() {
      const dados = await Api.get("produto/top4");
      console.log(dados.data.data);
      setTop5(dados.data.data)
    }
    buscaTop5();
  }, []);

  return (
    <>
      <div className="containerPrincipal">
        <div className="carrosel">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ height: "400px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Consoles e PCs</h5>
                  <p>Os consoles mais famosos e PCs mais turbinados</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Franquia WatchDogs com desconto</h5>
                  <p>Aproveite a franquia watchdogs com desconto na loja.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Elden Ring </h5>
                  <p>
                    O jogo mais comentado de 2022 está em estoque, aproveite!
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <h1 className="container--titulo">Mais vendidos</h1>
        <div className="MaisVendidos">
          {top5.map((x) => {
            return(
            <Produto key={x.produtoID}>
              <ProdutoImagem src={x.urlCapa} />
              <ProdutoTexto>{x.nome}</ProdutoTexto>
              <ProdutoTexto>R$ {x.preco}</ProdutoTexto>
              <ProdutoBotao>
                <BsCart />
                COMPRAR
              </ProdutoBotao>
            </Produto>);
          })}
        </div>
        <div className="container--banner">
          <img src={img8} className="banner" />
          <img src={img9} className="banner" />
        </div>
        <div className="container--bannerFull">
          <img src={img10} className="bannerteste" />
        </div>
        <h1>Categorias</h1>
        <div className="container--categorias">
          <img src={img11}></img>
          <img src={img12}></img>
          <img src={img13}></img>
          <img src={img14}></img>
          <img src={img15}></img>
          <img src={img16}></img>
        </div>
      </div>
    </>
  );
}

export default Home;
