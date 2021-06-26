import React from 'react';
import './styles.scss';
import { ReactComponent as FacebookImage } from 'core/assets/images/icon-facebook.svg';
import { ReactComponent as InstagramImage } from 'core/assets/images/icon-instagram.svg';
import { ReactComponent as LinkedinImage } from 'core/assets/images/icon-linkedin.svg';

const Footer = () => (

    <footer className="container-fluid">
        <div className="row footer-content">
            <div className="col-12 col-sm-6 footer-content-align">
                <h1 className="footer-title">SOLUÇÕES</h1>
                    <p className="footer-solutions-text">
                        <a href="http://www.viptech.com.br/fabrica-software" target="_blank">
                            Fábrica de Software<br/>
                        </a>
                        <a href="http://www.viptech.com.br/rastreamento-veiculos" target="_blank">
                            Monitoramento<br/>
                            Patrimonial e Portaria<br/>
                        </a>
                        <a href="http://www.viptech.com.br/monitoramento-patrimonial" target="_blank">
                            Rastreamento de Veículos
                        </a>
                    </p>
            </div>
            <div className="col-12 col-sm-6 footer-content-align footer-follow-us-align">
                <h1 className="footer-title">SIGA-NOS</h1>
                    <div className="icons-collection">
                        <a href="https://www.facebook.com/viptechti/" target="_blank">
                            <FacebookImage />
                        </a>
                        <a href="https://www.instagram.com/viptechsmartsolutions/" target="_blank">
                            <InstagramImage className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/viptech-ti/?originalSubdomain=br" target="_blank">
                            <LinkedinImage className="icon" />
                        </a>
                    </div>
            </div>
        </div>
    </footer>
);

export default Footer;
