import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router";
import { Api } from "../../services/api";

const Carrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [valorFinal, setValorFinal] = useState(0);

  const calculaTotal = (prod) => {
    let valorTotal = 0;

    prod.forEach((element) => {
      if (element.quantidade != 0)
        valorTotal += element.valorUnidade * element.quantidade;
    });

    setValorFinal(valorTotal);
  };

  useEffect(() => {
    async function getProdutos() {
      const dados = await Api.get("carrinho").then((x) => {
        setProdutos(x.data.data);
        //console.log(produtos);
      });
    }
    getProdutos();
    calculaTotal(produtos);
  }, [calculaTotal, adicionarCarrinho, removerProduto]);

  async function adicionarCarrinho(id, preco, quantidade) {
    const request = await Api.post("carrinho/addProduto", {
      produtoId: id,
      userId: 0,
      quantidade: quantidade,
      valorUnidade: parseInt(preco),
    });
  }

  async function removerProduto(id){
    const request = await Api.post(`carrinho/removeProduto/${id}`);
    console.log(request)
  }

  // console.log("produtos", produtos[0]);

  return (
    <>
      <div className="containerFullCar">
        <div className="DivEnd">
          <div className="tituloCar">
            <BsFillGeoAltFill className="icone" />
            <h2> SELECIONE O ENDEREÇO</h2>
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
            <h2>PRODUTOS</h2>
          </div>
          {produtos.length > 0 &&
            produtos.map((x) => {
              return (
                <div className="DivProd--conteudo">
                  <div className="descricaoJogo">
                    <img className="imgProd" src={x.produto.capa.url}></img>
                    <p className="Legenda01">{x.produto.nome}</p>
                  </div>
                  <div className="quantidadeCar">
                    <span className="">Quant:</span>
                    <div className="quantidadeCar--controles">
                      <span
                        className="controleMenos"
                        onClick={() =>
                          adicionarCarrinho(x.produtoID, x.valorUnidade, -1)
                        }
                      >
                        <BsChevronLeft />
                      </span>

                      <span>{x.quantidade}</span>
                      <span
                        className="controleSoma"
                        onClick={() =>
                          adicionarCarrinho(x.produtoID, x.valorUnidade, 1)
                        }
                      >
                        <BsChevronRight />
                      </span>
                    </div>
                    <span className="removeItem" onClick={() => removerProduto(x.produtoID)}>
                      <BsTrashFill /> Remover
                    </span>
                  </div>
                  <div className="preco">
                    <p>
                      Preço:
                      <br />
                      R$ {x.valorUnidade}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="DivFinal">
          <p className="total">
            Total:
            <br />
            R${valorFinal}
          </p>
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
