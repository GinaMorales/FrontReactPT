import React from 'react';
import axios from 'axios';
import Departamento from './Departamento';
import GoogleMaps from './GoogleMaps';
import Paginacion from './Paginacion';
import { FaFilter } from "react-icons/fa";


export default class Contenido extends React.Component {

    state = {
        homes: [],
        currentPage: 0,
        todosPerPage: 0,
        pageOfItems: [],
        currentItem: 0
    }

    constructor(props: any) {
        super(props);

        this.state = {
            homes: [],
            currentPage: 1,
            todosPerPage: 12,
            pageOfItems: [],
            currentItem: 0
        }
    }

    async componentDidMount() {
        this.setState(await this.obtenerDatos());
        this.handleClick = this.handleClick.bind(this);
        this.seleccionarItem=this.seleccionarItem.bind(this);
    }

    async obtenerDatos() {
        let respuesta = await axios.get(`https://us-central1-homie-front-test.cloudfunctions.net/homes`)
            .then(res => res);

        return respuesta.data;
    }

     handleClick = async (pageOfItems: any) => {
        await this.setState({
            pageOfItems: pageOfItems
        });
    }

    seleccionarItem=async(item:any)=>{
        
        await this.setState({
            currentItem:parseInt(item)
        })
        
    }

    render() {
        const renderTodos = this.state.pageOfItems.map((home: any, index) => {
            return (
                <div key={index} className="col-lg-6 mb-3">
                    <Departamento  index={index} home = {home} onHoverItem={this.seleccionarItem}></Departamento>
                </div>
              );
        });

        return (
            <div className="row">
                
                    <div className="row col-lg-7">
                        <div className="row col-lg-12 my-3">
                            <div className="col-lg-9">
                                <div className="shadow py-2 px-4 bg-white rounded">
                                    <span className="color-texto"><b>Ciudad de México</b></span><br />
                                    <span>230 departamentos</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <button type="button" className="btn btn-info py-3 px-4 shadow"><FaFilter></FaFilter> Filtros</button>
                            </div>
                        </div>
                        <div className="row col-lg-12">
                            {renderTodos}
                        </div>
                        <div className="row col-lg-12 justify-content-center">
                            <Paginacion homes = {this.state.homes} currentPage = {this.state.currentPage} todosPerPage = {this.state.todosPerPage} onChangePage = {this.handleClick}/>
                        </div>
                        <div className="col-lg-12 my-3 text-center">
                            <p><b>¿No encuentras depa?</b></p>
                            <p>Dinos qué quieres y nosotros te lo buscamos</p>
                            <p><button type="button" className="btn px-5 btn-danger shadow">Encuéntrame un depa</button></p>
                        </div>
                    </div>
                    <div className="row col-lg-5 maps">
                        <GoogleMaps items={this.state.pageOfItems} currentItem={this.state.currentItem} onHoverItem={this.seleccionarItem}
                        ></GoogleMaps>
                    </div>

            </div>
        );
    }
}