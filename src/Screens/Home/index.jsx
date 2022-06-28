import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import img1 from "../../assents/consoles.png";
import img2 from "../../assents/dogs.png";
import img3 from "../../assents/eldenRing.png";
import img4 from "../../assents/darksouls3.jpg";
import img5 from "../../assents/sekiro.jpg";
import img6 from "../../assents/thewitcher3.jpg";
import img7 from "../../assents/eldenring.jpg";
import img8 from "../../assents/gtaBanner.png";
import img9 from "../../assents/bannerBatman.png";
import img10 from "../../assents/BannerTeste.png";
import img11 from "../../assents/catFpd.png";
import img12 from "../../assents/catRpg.png";
import img13 from "../../assents/catSouls.png";
import img14 from "../../assents/catPerifericos.png";
import img15 from "../../assents/CatPc.png";
import img16 from "../../assents/CatConsole.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";

const Home = () => {
  return (

    <>

      <Carousel >
        <div>
          <img className='imgs' src={img1}></img>
          <h1 className='Titulos'>Destaques</h1>
        </div>
        <div >
          <img className='imgs' src={img2}></img>
          <h1 className='Titulos'>Destaques</h1>
        </div>
        <div className='active'>
          <img className='imgs' src={img3}></img>
          <h1 className='Titulos'>Destaques</h1>
        </div>
      </Carousel>
      <div>
        <h1 className='tituloMV'>Mais vendidos</h1>
        <Card>
          <div className=''>
            <img className='card-img-top' src={img4}></img>
            <div className='card-body'>
              <h5 className='card-text'>Dark Souls 3</h5>
              <p className='card-text'>R$ 125,50</p>
              <div>
                <button className='btnComprar'><BsCart />COMPRAR</button>
              </div>
            </div>
          </div>

        </Card>
        <Card>
          <div className=''>
            <img className='card-img-top' src={img5}></img>
            <div className='card-body'>
              <h5 className='card-text'>Sekiro</h5>
              <p className='card-text'>R$ 200,80</p>
              <div>
                <button className='btnComprar'><BsCart />COMPRAR</button>
              </div>
            </div>
          </div>

        </Card>
        <Card>
          <div className=''>
            <img className='card-img-top' src={img6}></img>
            <div className='card-body'>
              <h5 className='card-text'>The Withcer 3 </h5>
              <p className='card-text'>R$ 98,50</p>
              <div>
                <button className='btnComprar'><BsCart />COMPRAR</button>
              </div>
            </div>
          </div>

        </Card>

        <Card>
          <div className=''>
            <img className='card-img-top' src={img7}></img>
            <div className='card-body'>
              <h5 className='card-text'>Elsen Ring</h5>
              <p className='card-text'>R$ 250,00</p>
              <div>
                <button className='btnComprar'><BsCart />COMPRAR</button>
              </div>
            </div>
          </div>

        </Card>
      </div>

      <div>
        <div className='banners'>
          <img src={img8} className='banner' />
        </div>
        <div className='banners'>
          <img src={img9} className='banner' />
        </div>
      </div>

      <div>
        <img src={img10} className='bannerteste' />
      </div>
      <br /> <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br />
      <div>
        <h1 className='tituloCT'>Categorias</h1>
        <div className='cates'>
          <img className='imgsCat' src={img11}></img>
        </div>
        <div className='cates'>
          <img className='imgsCat' src={img12}></img>
        </div>
        <div className='cates'>
          <img className='imgsCat' src={img13}></img>
        </div>
        <div className='cates'>
          <img className='imgsCat' src={img14}></img>
        </div>
        <div className='cates'>
          <img className='imgsCat' src={img15}></img>
        </div>
        <div className='cates'>
          <img className='imgsCat' src={img16}></img>
        </div>
      </div>
    </>

  );
}

export default Home

