import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Card } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { Link, useParams } from "react-router-dom";


const Games = () => {
    const [Produto, setProduto] = useState([]);

    useEffect(() => {
        async function getx() {
          try {
            const res = await Api.get(`/Produto/Categoria`);
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
            <div>

            {Produto.map((x) => {
                    return(

                        
                        <Card>
                    <div>
                        {
                            console.log(x)
                        }
                    <Link  to= {`/detalhes/${x.produtoID}`}>
                        <img className='card-img-top' src={x.urlCapa}></img>
                    </Link>
                    
                        <div className='card-body'>
                            <h5 className='card-text'>{x.nome}</h5>
                            <p className='card-text'>R$ {x.preco}</p>
                            <div>
                                <button className='btnComprar'><BsCart />COMPRAR</button>
                            </div>
                        </div>
                    </div>

                </Card>
                            );
                }
            )}
            </div>

        </>

    );
}

export default Games  