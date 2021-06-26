import React from 'react';
import './styles.scss';
import LogoImage from 'core/assets/images/logo_viptech.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="container-fluid">
        <div className="row navbar-content">
            <div className="col-12 col-md-6">
                <Link to="/">
                    <img src={LogoImage} className="navbar-logo-image"></img>
                </Link>
            </div>
            <div className="col-12 col-md-6">
                <ul className="navbar-menu">
                    <li className="navbar-link">
                        <NavLink to="/" exact>
                            HOME |
                        </NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink to="/users" exact>
                            CONSULTAR CLIENTES
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
