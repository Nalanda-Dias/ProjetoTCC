import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {
  BsFillXDiamondFill,
  BsUpc,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { useCompra } from "../../context/CompraProvider/useCompra";
import { useState } from "react";

const tiposPagamento = [
  {
    titulo: "Boleto",
    descricao: `O Boleto bancário, também conhecido como boleto de cobrança, é utilizado como 
        uma forma de pagamento por meio de uma negociação comercial. O emissor (cedente ou beneficiário) usa 
        esse recurso para receber o dinheiro referente ao produto ou à um serviço.`,
    id: 3,
  },
  {
    titulo: "Cartão de Crédito",
    descricao: `Cartão de crédito é uma forma de pagamento eletrônico. É um cartão de plástico 
        que pode conter ou não um chip e apresenta na frente o nome do portador, número do cartão e data de 
        validade (pelo menos) e, no verso, um campo para assinatura do cliente, o número de segurança (CVV2) e 
        a tarja magnética (geralmente preta).`,
    id: 2,
  },
];

const Pagamento = () => {
  const [tipoPagamento, setTipoPagamento] = useState({
    titulo: "PIX",
    descricao: `O Pix é um meio eletrônico e instantâneo de pagamentos e transferências bancárias que foi criado 
            pelo Banco Central do Brasil. Transações bancárias podem ser feitas pelo celular a qualquer hora e 
            dia, a partir de conta-corrente, poupança ou de pagamento.`,
    id: 1,
  });
  const [active, setActive] = useState(0);

  const toogle = (posicao) => {
    if (active === posicao) {
      setActive(0);
    } else {
      setActive(posicao);
    }
  };

  const myColor = (posicao) => {
    if (active === posicao) {
      return { bg: "#df9f00", txt: "#000" };
    }
    return "";
  };

  const handleTipoPagamento = (id) => {
    switch (id) {
      case 2:
        const card = tiposPagamento.find(({ id }) => id == 2);
        setTipoPagamento(card);
        break;
      case 3:
        const boleto = tiposPagamento.find(({ id }) => id == 3);
        setTipoPagamento(boleto);
        break;
      default:
        setTipoPagamento({
          titulo: "PIX",
          descricao: `O Pix é um meio eletrônico e instantâneo de pagamentos e transferências bancárias que foi criado 
                pelo Banco Central do Brasil. Transações bancárias podem ser feitas pelo celular a qualquer hora e 
                dia, a partir de conta-corrente, poupança ou de pagamento.`,
          id: 1,
        });
        break;
    }
  };

  const compra = useCompra();
  const [total, setTotal] = useState(compra)

  useEffect(() => {
    console.log(compra);
  }, []);

  return (
    <>
      <div className="containerPagamento">
        <div className="DivButtons">
          <button
            className="botaoPagamento"
            style={{ backgroundColor: myColor(0).bg, color: myColor(0).txt }}
            onClick={() => {
              handleTipoPagamento(1);
              toogle(0);
            }}
          >
            <BsFillXDiamondFill /> PIX
          </button>
          <br />
          <button
            className="botaoPagamento iconBoleto"
            style={{ backgroundColor: myColor(1).bg, color: myColor(1).txt }}
            onClick={() => {
              handleTipoPagamento(2);
              toogle(1);
            }}
          >
            <BsUpc /> BOLETO
          </button>
          <br />
          <button
            className="botaoPagamento"
            style={{ backgroundColor: myColor(2).bg, color: myColor(2).txt }}
            onClick={() => {
              handleTipoPagamento(3);
              toogle(2);
            }}
          >
            <BsFillCreditCardFill /> CARTÃO DE CRÉDITO
          </button>
        </div>
        <div className="descricaoPagamento">
          <h3>{tipoPagamento.titulo}</h3>
          <p>{tipoPagamento.descricao}</p>
          <div className="controlePagamento">
            <div className="totalPag">
              <p>
                TOTAL A PAGAR: <br /> R$ {compra.total}
              </p>
            </div>
            <div>
              <a href="/carrinho">
                <button className="botaoVoltar">VOLTAR</button>
              </a>
              <a href="/confcompra">
                <button className="botaoComprar">
                  PAGAR COM {tipoPagamento.titulo.toUpperCase()}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagamento;
