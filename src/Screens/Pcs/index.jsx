import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Card } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ProdutoBotao,
  ProdutoImagem,
  ProdutoTexto,
  Produto,
} from "../Home/styles";
import img1 from "../../assents/minecraft.jpg"

const Pcs = () => {
  const [produtos, setProduto] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getx() {
      try {
        const res = await Api.get(`/Produto`);
        console.log(res.data.data);
        setProduto(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getx();
  }, []);

  return (
    <>
      <div className="containerFull">
        <div className="containerPcs">
          {produtos.map((x) => {
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

export default Pcs;