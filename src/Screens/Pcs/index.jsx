import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Card } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import img1 from "../../assents/thumb-heavy-black.png";

const Pcs = () => {
    return (

        <>
        <div>
         
         <Card>
             <div className=''>
                 <img className='card-img-top' src={img1}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Pc Gamer</h5>
                     <p className='card-text'>R$ 3.000</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>
         </div>
     <br /><br /><br /><br />
     <br /><br /><br /><br />
     <br /><br /><br /><br />
        </>
    )
}
export default Pcs