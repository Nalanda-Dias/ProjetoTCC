import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { BsCart } from "react-icons/bs";
import img0 from "../../assents/logoGTA.png";
import img1 from "../../assents/gtaV.jpg";
import img2 from "../../assents/GTA5.png";
import img3 from "../../assents/GTA2.png";
import img4 from "../../assents/GTA1.png";

import React, { useEffect, useState } from "react";

import { Api } from "../../services/api";
import { useParams } from "react-router-dom";

const Detalhe = () => {
    
    // const {id} = useParams();
    
    const [Produto, setProduto] = useState({});
    const [fotos, setFotos] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        async function getx() {
          try {
            const res = await Api.get(`produto/${id}`);
            console.log(res.data.data);
            setProduto(res.data.data);
            console.log(res.data.data)
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

            <div>
                <div className='div1'>
                    <h3 className="tituloDetalhes">{Produto.titulo}</h3>

                    <br />
                    <img src={Produto.urlCapa} className="imagemPric" />
                    <div className='imagensSec'>
                        {fotos.map((x) => { return <img src={x} className="imgSec" />; })}
                    </div>
                </div>
                <div className='div2'>
                    <div className='titulo1'>
                        <p>Vendido e entregue por: Infinite Games  | </p></div>
                        <div><p className='estoque'>Em estoque</p></div>
                        <div className='ValorComprar'>
                            <h3 className='valor'>RS200,00</h3>
                        </div>
                        <div className='btn5'>
                        <a href='/carrinho'>  <button className='btnComprar5'><BsCart />COMPRAR</button></a>
                        </div>
                    </div>
                    <div className='descricao'>
                        <p>GTA V Premium Online Edition PS4 GRAND THEFT AUTO V! Entre nas vidas de três criminosos muito
                            diferentes, Michael, Franklin e Trevor, enquanto eles arriscam tudo em uma série de assaltos
                            ousados que podem garantir o resto de suas vidas. Explore o deslumbrante mundo de Los Santos
                            e Blaine County na experiência definitiva de Grand Theft Auto V, apresentando amplas
                            atualizações e melhorias técnicas tanto para jogadores novos quanto para os que estão
                            retornando. Além de distâncias maiores de renderização e melhor resolução, os jogadores
                            podem esperar diversas adições e melhorias. </p>
                    </div>
                </div>
            
        </>
    )
}

export default Detalhe