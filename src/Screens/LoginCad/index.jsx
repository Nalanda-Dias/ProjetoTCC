import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BsFillDoorOpenFill, BsFacebook, BsGoogle } from "react-icons/bs";
import face from "../../assents/logoface.png";
import google from "../../assents/google.png";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginCad() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cadEmail, setCadEmail] = useState("");
  const [cadPassword, setCadPassword] = useState("");
  const [cadNome, setCadNome] = useState("");
  const [cadCpf, setCadCpf] = useState("");
  const [cadCep, setCadCep] = useState("");
  const [cadTelefone, setCadTelefone] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  const notifyError = (m) =>
    toast.error(m, {
      theme: "colored",
    });
  const notifySuccess = (m) =>
    toast.success(m, {
      theme: "colored",
    });

  async function onFinish(event) {
    try {
      event.preventDefault();

      console.log(email, password);

      await auth.authenticate(email, password);

      navigate("/home");
    } catch (error) {
      console.log("Usuario ou senha invalidos");
      notifyError("Usuario ou senha invalidos");
    }
  }

  async function cadastrar(e) {
    try {
      e.preventDefault();

      const cliente = {
        nome: cadNome,
        telefone: cadTelefone,
        senha: cadPassword,
        email: cadEmail,
      };

      console.log(cliente);

      const res = await auth.register(cliente);
      console.log(res)

      if(res != null){
      
        setTimeout(async () =>{
          notifySuccess("Usuario cadastrado");
          await auth.authenticate(cadEmail, cadPassword);
          navigate("/home");
        }, 1000);
      }
      else{
        throw new expect();
      }
    } catch (error) {
      console.log("Erro ao cadastrar");
      notifyError("Erro ao cadastrar");
    }
  }

  if (auth.token || auth.token == null) {
    return (
      <>
        <ToastContainer />
        <div className="containerFull">
          <div className="containerLogin">
            <form className="login-form" onSubmit={(e) => onFinish(e)}>
              <span className="login-form-title">JÁ TENHO UMA CONTA</span>
              <div className="wrap-input">
                <label htmlFor="email" className="legenda">
                  E-mail
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="wrap-input">
                <label className="legenda" htmlFor="senha">
                  Senha
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  name="senha"
                  id="senha"
                  type="password"
                />
              </div>
              <div>
                <button className="btnEntrar" type="submit">
                  <BsFillDoorOpenFill />
                  ENTRAR
                </button>
              </div>
              <hr />
              <div>
                <p className="legenda1">
                  QUERO ENTRAR COM MINHAS REDES SOCIAIS{" "}
                </p>
                <div className="botoes">
                  <button className="btnEntrar1">
                    <BsFacebook />
                    ENTRAR COM O FACEBOOK
                  </button>
                  <button className="btnEntrar2">
                    <BsGoogle />
                    ENTRAR COM O GOOGLE
                  </button>
                </div>
              </div>
            </form>
          </div>
          <span className="linhavertical">.</span>
          <div className="container2">
            <form className="login-form" onSubmit={(e) => cadastrar(e)}>
              <span className="login-form-title">JÁ TENHO UMA CONTA</span>
              <br />
              <div className="alinhamento">
                <div className="wrap-input1">
                  <input
                    type="text"
                    id="cad-nome"
                    name="cad-nome"
                    onChange={(e) => setCadNome(e.target.value)}
                    placeholder="Nome*"
                    className="form-control"
                  />
                </div>
                <div className="wrap-input1">
                  <input
                    type="tel"
                    id="cad-tel"
                    name="cad-tel"
                    onChange={(e) => setCadTelefone(e.target.value)}
                    placeholder="Telefone*"
                    className="form-control"
                  />
                </div>
                <div className="wrap-input1">
                  <input
                    type="email"
                    id="cad-email"
                    name="cad-email"
                    onChange={(e) => setCadEmail(e.target.value)}
                    placeholder="E-mail*"
                    className="form-control"
                  />
                </div>
                <div className="wrap-input1">
                  <input
                    id="cad-senha"
                    name="cad-senha"
                    onChange={(e) => setCadPassword(e.target.value)}
                    className="form-control"
                    placeholder="Senha*"
                    type="password"
                  />
                </div>
                <div className="wrap-input1">
                  <input
                    id="cad-cpf"
                    name="cad-cpf"
                    onChange={(e) => setCadCpf(e.target.value)}
                    className="form-control"
                    placeholder="CPF*"
                    type="text"
                  />
                </div>
                <div>
                  <button className="btnEntrar3" type="submit">
                    <BsFillDoorOpenFill />
                    CADASTRAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  return navigate("/home");
}
