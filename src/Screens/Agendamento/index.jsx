import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import img1 from "../../assents/agendamento.png";
import img2 from "../../assents/gtaV.jpg";
import { BsCart, BsXLg } from "react-icons/bs";
import Modal from "react-modal";
import styles from "./style.css";
import { Api } from "../../services/api";
import {
  Produto,
  ProdutoBotao,
  ProdutoImagem,
  ProdutoTexto,
} from "../Home/styles";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { format } from "date-fns";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Agendamento = () => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modelCreateIsOpen, setModelCreateIsOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedproduto, setSelectedproduto] = useState(0);
  const [top5, setTop5] = useState([]);
  const [active, setActive] = useState(null);
  const [agendamentoAtual, setAgendamentoAtual] = useState(null);

  const selecionarProduto = (posicao) => {
    if (active === posicao) {
      setActive(null);
    } else {
      setActive(posicao);
      console.log(active);
    }
  };

  const selecionarCor = (posicao) => {
    if (active === posicao) {
      return { bg: "#df9f00", txt: "#000" };
    }
    return {};
  };

  useEffect(() => {
    async function buscaAgendamento() {
      const dados = await Api.get("agendamento/usuario");
      console.log("agendamento", dados.data.data);
      setAgendamentoAtual(dados.data.data);
    }
    buscaAgendamento();
  }, []);

  useEffect(() => {
    async function buscaTop5() {
      const dados = await Api.get("produto/top4");
      console.log(dados.data.data);
      setTop5(dados.data.data);
    }
    buscaTop5();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function openCreateModal() {
    setModelCreateIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeCreateModal() {
    setModelCreateIsOpen(false);
  }

  async function cadastrarAgenda() {
    const dateFormat = format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss");
    console.log(dateFormat);
    const request = await Api.post("agendamento", {
      horario: dateFormat,
      jogoId: 2,
      maquinaId: 2,
    });
    console.log(request);
    closeCreateModal();
  }

  const date = new Date(agendamentoAtual?.dataAgendamento).toLocaleDateString();
  return (
    <>
      <div className="containerAgendamento">
        <div className="agendament">
          <p className="legendaAgenda">
            Agende seu teste e experiemente <br /> antes de comprar!
          </p>
          <button className="agenda" onClick={openCreateModal}>
            AGENDAR
          </button>
        </div>
        {agendamentoAtual != null ? (
          <>
            <p className="agendaAtual">Agendamento Atual:</p>
            <div className="infomacoesAgendamento">
              <div className="imagemAgenda">
                <img className="imgagenda" src={agendamentoAtual?.imageUrl}></img>
                <p className="LegAgenda">GTA San Andreas</p>
              </div>
              <section className="quando">
                Quando: <br />
                {date}
              </section>
              <div className="cancelar">
                <section className="iconeCancelar">
                  <BsXLg />
                </section>
                <button className="buttonCancelar">Cancelar</button>
              </div>
              <span className="informacoes" onClick={openModal}>
                Mais
                <br />
                informações
              </span>
            </div>
          </>
        ) : (
          <h1 style={{marginBottom:"200px"}}>Nenhum agendamento encontrado</h1>
        )}
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Mais informaçoes</h2>
          <hr />
          <p>
            <strong>Endereço</strong>: R. Guaipá, 678 - Vila Leopoldina, São
            Paulo - SP, 05089-000
          </p>
          <p>
            <strong>Data e Horário</strong>:{agendamentoAtual?.dataAgendamento}
          </p>
          <p>
            <strong>Teste</strong>:GTA San Andreas
          </p>
        </Modal>
        <Modal
          isOpen={modelCreateIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeCreateModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Escolha um jogo</h2>
          <hr />
          <div className="MaisVendidosAgenda">
            {top5.map((x) => {
              return (
                <Produto key={x.produtoID}>
                  <ProdutoImagem src={x.urlCapa} />
                  <ProdutoTexto>{x.nome}</ProdutoTexto>
                  <ProdutoBotao
                    style={{
                      backgroundColor: selecionarCor(x.produtoID).bg,
                      color: selecionarCor(x.produtoID).txt,
                    }}
                    onClick={() => selecionarProduto(x.produtoID)}
                  >
                    ESCOLHER
                  </ProdutoBotao>
                </Produto>
              );
            })}
          </div>
          <div className="inputDate">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                variant="dialog"
                fullWidth={true}
                label="Data do agendamento"
                margin="normal"
              />
            </MuiPickersUtilsProvider>
            <ProdutoBotao
              style={{ marginTop: "20px" }}
              onClick={() => cadastrarAgenda()}
            >
              CONFIRMAR
            </ProdutoBotao>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Agendamento;
