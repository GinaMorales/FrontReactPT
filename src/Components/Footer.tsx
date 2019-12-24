import React from 'react';
import { FaFacebookMessenger } from "react-icons/fa";

export default class Footer extends React.Component {
    render(){
        return (
            <footer className="bg-white">
                <div className="row">
                    <div className="col-lg-2">
                        <img src="../Images/homiefoot.png" width="70%" className="d-inline-block align-middle" />
                    </div>
                    <div className="row col-lg-3">
                        <ul className="list-unstyled">
                            <li><a className="text-muted" href="#">hey@homie.mx</a></li>
                            <li><a className="text-muted" href="#">5015 1546</a></li>
                            <li><a className="text-muted" href="#"><FaFacebookMessenger></FaFacebookMessenger> Escribenos en facebook</a></li>
                        </ul>
                    </div>
                    <div className="row col-lg-3">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Te buscamos depa</a></li>
                            <li><a className="text-muted" href="#">Blog</a></li>
                            <li><a className="text-muted" href="#">Equipo</a></li>
                        </ul>
                    </div>
                    <div className="row col-lg-2">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Aviso de privaciodad</a></li>
                        </ul>
                    </div>
                    <div className="row col-lg-3">
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Términos y condiciones</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}