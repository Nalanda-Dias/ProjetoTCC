import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Card } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import img1 from "../../assents/teclado3.jpg";
import img2 from "../../assents/mouseresdragon.jpg";
import img3 from "../../assents/mousepad1.png";
import img4 from "../../assents/headsetreddragon.png";
import img5 from "../../assents/headset1.jpeg";
import img6 from "../../assents/headset2.png";
import img7 from "../../assents/teclado.jpg";
import img8 from "../../assents/teclado2.jpg";

const Perifericos = () => {
    return (

        <>
        <div>
         
         <Card>
             <div className=''>
                 <img className='card-img-top' src={img1}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Teclado Mecânico</h5>
                     <p className='card-text'>R$ 255,50</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>
         <Card>
             <div className=''>
                 <img className='card-img-top' src={img2}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Mouse Gamer</h5>
                     <p className='card-text'>R$ 114,90</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>
         <Card>
             <div className=''>
                 <img className='card-img-top' src={img3}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Mouse Pad </h5>
                     <p className='card-text'>R$ 180,50</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>

         <Card>
             <div className=''>
                 <img className='card-img-top' src={img4}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Headset</h5>
                     <p className='card-text'>R$ 250,00</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>
     </div>

     
     <div>

         <Card>
             <div className='card2'>
                 <img className='card-img-top' src={img5}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Headset Branco</h5>
                     <p className='card-text'>R$ 100,00</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>
         <Card>
             <div className='card2'>
                 <img className='card-img-top' src={img6}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Headset Fem Rosa</h5>
                     <p className='card-text'>R$ 120,00</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>
         <Card>
             <div className='card2'>
                 <img className='card-img-top' src={img7}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Teclado </h5>
                     <p className='card-text'>R$ 100,00</p>
                     <div>
                         <button className='btnComprar'><BsCart />COMPRAR</button>
                     </div>
                 </div>
             </div>

         </Card>

         <Card>
             <div className='card2'>
                 <img className='card-img-top' src={img8}></img>
                 <div className='card-body'>
                     <h5 className='card-text'>Teclado Gamer</h5>
                     <p className='card-text'>R$ 140,00</p>
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
export default Perifericos