import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-light navbar-expand-lg bg-white sticky-top">
                <div className="row">
                    <div className="col-lg-2">
                        <a className="navbar-brand" href="#"><img src="../Images/homie.png" width="90" className="d-inline-block align-top" /></a>
                    </div>
                    <div className="row col-lg-10">
                        <ul className="navbar-nav">
                            <div className="col-lg-8">
                                <li className="nav-item"><a className="nav-link" href="#"><img src="../Images/corazon.png" width="20" className="d-inline-block align-middle" />Favoritos</a></li>
                            </div>
                            <div className="col-lg-4">
                                <li className="nav-item"><a className="nav-link" href="#">¿Cómo funciona?</a></li>
                            </div>
                            <div className="col-lg-4">
                                <li className="nav-item"><a className="nav-link" href="#">Soy propietario</a></li>
                            </div>
                            <div className="col-lg-4">
                                <li className="nav-item"><a className="nav-link" href="#">Iniciar sesión</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}