import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BsCart } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Detalhe = () => {
  // const {id} = useParams();

  const [Produto, setProduto] = useState({});
  const [fotos, setFotos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const notifyError = (m) =>
    toast.error(m, {
      theme: "colored",
    });
  const notifySuccess = (m) =>
    toast.success(m, {
      theme: "colored",
    });

  async function adicionarCarrinho() {
    const pesquisaCarrinho = await Api.get("carrinho");
    if(pesquisaCarrinho.data.data == null){
      const abrirCarrinho = await Api.post("carrinho");
      console.log("Log - Req Abrindo Carrinho", abrirCarrinho)
    }
    const request = await Api.post("carrinho/addProduto", {
      produtoId: id,
      userId: 0,
      quantidade: 1,
      valorUnidade: parseInt(Produto.preco)
    })
    console.log("Log - Req Add Prod Carrinho", request)
    navigate("/carrinho");
  }

  console.log(id);

  useEffect(() => {
    async function getx() {
      try {
        const res = await Api.get(`produto/${id}`);
        console.log(res.data.data);
        setProduto(res.data.data);
        console.log(res.data.data);
        console.log("Fotos recebidas", res.data.data.urlFotos);
        setFotos(res.data.data.urlFotos);

        // console.log("URL Fotos: " + Produto.urlFotos[0]);
      } catch (error) {
        console.log("Erro: " + error);
      }
    }
    getx();
  }, []);

  console.log("Fostos do estado", fotos);
  return (
    <>
      <ToastContainer />
      <div className="containerFullProduto">
        <div className="div1">
          <img src={Produto.urlCapa} className="capa" />
          <div className="imagensSec">
            {fotos.map((x) => {
              return <img src={x} className="imagens" />;
            })}
          </div>
        </div>
        <div className="div2">
          <h1 className="tituloDetalhes">{Produto.titulo}</h1>
          <div className="informacoesEstoque">
            <div className="titulo1">
              <p>Vendido e entregue por: Infinite Games | </p>
            </div>
            <div>
              {Produto.estoque > 0 ? (
                <p className="estoque">Em estoque</p>
              ) : (
                <p className="estoque">Estoque esgtado</p>
              )}
            </div>
          </div>
          <div className="botaoPreco">
            <div className="ValorComprar">
              <h3 className="valor">R$ {Produto.preco}</h3>
            </div>
            <div>
              <a>
                <button
                  className="btnComprar5"
                  onClick={() => adicionarCarrinho()}
                >
                  <BsCart />
                  COMPRAR
                </button>
              </a>
            </div>
          </div>
          <div className="descricao">
            <p>{Produto.descricao}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalhe;
