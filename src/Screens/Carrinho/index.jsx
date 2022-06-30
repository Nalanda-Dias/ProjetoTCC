import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import img1 from "../../assents/gtaV.jpg";
import img2 from "../../assents/darksouls3.jpg";

import {
  BsFillGeoAltFill,
  BsFillBasket2Fill,
  BsChevronRight,
  BsChevronLeft,
  BsTrashFill,
} from "react-icons/bs";

const Carrinho = () => {
  return (
    <>
      <div className="containerFullCar">
        <div className="DivEnd">
          <div className="tituloCar">
            <BsFillGeoAltFill className="icone" />
            <h2 className="tituloss"> SELECIONE O ENDEREÇO</h2>
          </div>

          <div className="conteudo">
            <input type="radio" name="fav_language" value="HTML" />
            <label for="html">My Home</label>
            <p>Rua Luisa Maria Rosa</p>
            <p>CEP: 02546050</p>
            <p>São Paulo - SP</p>
          </div>
        </div>

        <div className="DivProd">
          <div className="tituloCar">
            <BsFillBasket2Fill className="icone" height={40} />
            <h2 className="tituloss">PRODUTOS</h2>
          </div>
          <div className="DivProd--conteudo">
              <div className="descricaoJogo">
                <img className="imgProd" src={img1}></img>
                <p className="Legenda01">GTA V</p>
              </div>
              <div className="quantidadeCar">
                <span className="">Quant:</span>
                <div className="quantidadeCar--controles">
                    <span className="controleSoma">
                      <BsChevronLeft />
                    </span>
                    <span>0</span>
                    <span className="controleMenos">
                      <BsChevronRight />
                    </span>
                </div>
                <span className="removeItem">
                  <BsTrashFill /> Remover
                </span>
              </div>
              <div className="preco">
                <p>
                  Preço:
                  <br />
                  R$2,00
                </p>
              </div>
          </div>
        </div>

        <div className="DivFinal">
          <p className="total">Total:<br/>R$3000,00</p>
          <div>
              <a href="/pagamento">
                <button className="button04">CONFIRMAR</button>
              </a>
              <button className="button05">CONTINUAR COMPRANDO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
