import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BsCart } from "react-icons/bs";
import React, { useEffect} from "react";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  ProdutoBotao,
  ProdutoImagem,
  ProdutoTexto,
  Produto,
} from "../Home/styles";
import { useProduto } from "../../context/ProdutoProvider/useProduto";

const Games = () => {
  //const [produtos, setProduto] = useState([]);
  const navigate = useNavigate();
  const produto = useProduto();

  useEffect(() => {
    async function getx() {
      try {
        const res = await Api.get(`/Produto`);
        console.log(res.data.data);
        produto.setProdutos(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getx();
  }, []);

  return (
    <>
      <div className="containerFull">
        <div className="containerGames">
          {produto.produtos.map((x) => {
            return (
              <Produto key={x.produtoID}>
                <ProdutoImagem src={x.urlCapa} />
                <ProdutoTexto>{x.nome}</ProdutoTexto>
                <ProdutoTexto>R$ {x.preco}</ProdutoTexto>
                <ProdutoBotao onClick={() => navigate(`/detalhes/${x.produtoID}`)}>
                  <BsCart />
                  COMPRAR
                </ProdutoBotao>
              </Produto>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Games;
