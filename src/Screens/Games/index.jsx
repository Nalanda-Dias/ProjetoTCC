import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Card } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import img1 from "../../assents/darksouls3.jpg";
import img2 from "../../assents/sekiro.jpg";
import img3 from "../../assents/thewitcher3.jpg";
import img4 from "../../assents/eldenring.jpg";
import img5 from "../../assents/bf2042.jpg";
import img6 from "../../assents/codyww2.jpg";
import img7 from "../../assents/gtaV.jpg";
import img8 from "../../assents/minecraft.jpg";

const Games = () => {
    return (

        <>
            <div>

                <Card>
                    <div className=''>
                        <img className='card-img-top' src={img1}></img>
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
                        <img className='card-img-top' src={img2}></img>
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
                        <img className='card-img-top' src={img3}></img>
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
                        <img className='card-img-top' src={img4}></img>
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

            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <div>

                <Card>
                    <div className=''>
                        <img className='card-img-top' src={img5}></img>
                        <div className='card-body'>
                            <h5 className='card-text'>Battlefield</h5>
                            <p className='card-text'>R$ 169,00</p>
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
                            <h5 className='card-text'>Call Of Duty</h5>
                            <p className='card-text'>R$ 190,80200,80</p>
                            <div>
                                <button className='btnComprar'><BsCart />COMPRAR</button>
                            </div>
                        </div>
                    </div>

                </Card>
                <Card>
                    <div className=''>
                        <a href='/detalhes'><img className='card-img-top' src={img7}></img></a>
                        <div className='card-body'>
                            <h5 className='card-text'>GTA</h5>
                            <p className='card-text'>R$ 200,00</p>
                            <div>
                                <a href='#'>  <button className='btnComprar'><BsCart />COMPRAR</button></a>
                            </div>
                        </div>
                    </div>

                </Card>

                <Card>
                    <div className=''>
                        <img className='card-img-top' src={img8}></img>
                        <div className='card-body'>
                            <h5 className='card-text'>Minecraft</h5>
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

    );
}

export default Games  