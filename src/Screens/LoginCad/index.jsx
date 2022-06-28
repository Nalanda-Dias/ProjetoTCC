import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { BsFillDoorOpenFill, BsFacebook, BsGoogle } from "react-icons/bs";
import face from "../../assents/logoface.png";
import google from "../../assents/google.png"
export default function LoginCad() {
    return (
        <>
            <div className='container'>
                <form className='login-form'>
                    <span className='login-form-title'>JÁ TENHO UMA CONTA</span>
                    <div className='wrap-input'>
                        <label className='legenda'>E-mail</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className='wrap-input'>
                        <label className='legenda'>Senha</label>
                        <input className='form-control' type="password" />
                    </div>
                    <div>
                        <button className='btnEntrar'><BsFillDoorOpenFill />ENTRAR</button>
                    </div>

                    <hr />
                    <div>
                        <p className='legenda1'>QUERO ENTRAR COM MINHAS REDES SOCIAIS </p>

                        <div className='botoes'>
                            <button className='btnEntrar1'><BsFacebook/>ENTRAR COM O FACEBOOK</button>
                        </div>
                        <br />
                        <div>
                            <button className='btnEntrar2'><BsGoogle />ENTRAR COM O GOOGLE</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr className='linhavertical' />
            <div className='container2'>
                <form className='login-form'>
                    <span className='login-form-title'>JÁ TENHO UMA CONTA</span>
                    <br />
                    <div className='alinhamento'>
                        <div className='wrap-input1'>
                            <input type="email" placeholder='E-mail*' className="form-control" />
                        </div>
                        <br />
                        <div className='wrap-input1'>
                            <input className='form-control' placeholder='Senha*' type="password" />
                        </div>
                        <br />
                        <div className='wrap-input1'>
                            <input className='form-control' placeholder='CPF*' type="password" />
                        </div>
                        <br />
                        <div className='wrap-input1'>
                            <input className='form-control' placeholder='CEP*' type="password" />
                        </div>
                        <div>
                        <button className='btnEntrar3'><BsFillDoorOpenFill />CADASTRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
} 