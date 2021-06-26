import React from  'react';
import './styles.scss';
import HomeImage from 'core/assets/images/home_img.png';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
                <p className="home-description">
                    Somos uma empresa de software dedicado a oferecer<br/>
                    soluções inteligentes nas áreas de monitoramento<br/> 
                    patrimonial, rastreamento veicular, fábrica de software e<br/> 
                    soluções customizáveis em automação de processos empresariais.
                </p>
                <Link to="/users">
                    <button className="btn btn-outline-light home-action-btn">Consultar Clientes</button>
                </Link>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 home-image-align">
                <img src={HomeImage} className="home-image"></img>
            </div>
        </div>
    </div>
);

export default Home;
