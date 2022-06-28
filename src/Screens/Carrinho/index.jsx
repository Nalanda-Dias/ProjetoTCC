import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import img1 from "../../assents/gtaV.jpg";
import img2 from "../../assents/darksouls3.jpg";

import { BsFillGeoAltFill, BsFillBasket2Fill, BsChevronRight, BsChevronLeft, BsTrashFill } from "react-icons/bs";

const Carrinho = () => {
    return (

        <>
            <div className='DivEnd'>
                <div className='divend'>
                    <p className='icone'><BsFillGeoAltFill /></p>
                    <h2 className='titulo01'>SELECIONE O ENDEREÇO</h2> <br /><br />
                    <div className='conteudo'>
                        <input type="radio" name="fav_language" value="HTML" />
                        <label for="html">My Home</label>
                        <p>Rua Luisa Maria quRosa <br />
                            CEP: 02546050 - São Paulo - SP</p>

                        <input type="radio" name="fav_language" value="HTML" />
                        <label for="html">My Work</label>
                        <p>Vila Leopodina <br />
                            CEP: 02546050 - São Paulo - SP</p>
                    </div>

                </div>
            </div>

            <div className='DivProd'>
                <div>
                    <p className='icone1'><BsFillBasket2Fill /></p>
                    <h2 className='titulo01'>PRODUTOS</h2> <br /><br />
                    <img className='imgProd' src={img1}></img>
                    <p className='Legenda01'>GTA V</p>
                </div>
                <div>
                    <section className='Quant'>Quant:</section>
                    <button className='button01'><BsChevronLeft /> 0</button>
                    <button className='button02'><BsChevronRight /></button>
                    <br />

                    <button className='button03'><BsTrashFill /> Remover</button>
                </div>
                <div>
                    <p className='preco'>Preço: <br /> R$2,00</p>

                </div>
                <div className='DivProd1'>
                    <div>

                        <img className='imgProd' src={img2}></img>
                        <p className='Legenda01'>Dark Souls 3</p>
                    </div>
                    <div>
                        <section className='Quant'>Quant:</section>
                        <button className='button01'><BsChevronLeft /> 0</button>
                        <button className='button02'><BsChevronRight /></button>
                        <br />

                        <button className='button03'><BsTrashFill /> Remover</button>
                    </div>
                    <div>
                        <p className='preco'>Preço: <br /> R$125,99</p>

                    </div>
                </div>
            </div>

            <div className='DivFinal'>
                <p className='total'>Total: <br /> R$3000,00</p>
                <button className='button04'>CONFIRMAR</button>
                <button className='button05'>CONTINUAR COMPRANDO</button>
            </div>
        </>
    )
}

export default Carrinho