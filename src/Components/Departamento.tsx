import React from 'react';
import Carousel from './Carousel';
import NumberFormat from 'react-number-format';
import { FaRegHeart, FaBed, FaShower, FaCar, FaDog } from "react-icons/fa";

export default class Departamento extends React.Component<Props> {

    state = {
        home: {
            id: '',
            abbr_address: '',
            bathrooms: 0,
            bedrooms: 0,
            parkings: 0,
            sqare_mts: 0,
            location: {},
            name: '',
            pet_friendly: true,
            photos: [],
            price: 0, 
            is_homie_exclusive: false
        }
    }

    constructor(props: any) {
        super(props);
        this.state = { home: this.props.home };
    }

    async componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.home !== prevProps.home) {
           await this.setState({ home: this.props.home });
        }
    }

    onMouseHover=async (id:any)=>{

        this.props.onHoverItem(id)
    }

    render(){
        return (
            <div ref={this.state.home.id} 
            key={this.state.home.id} className="card shadow"
            >
                <div>
                    <Carousel photos = {this.state.home.photos}></Carousel>
                </div>
                <button key= {this.props.index} className="price" id={this.props.index} onClick={()=>this.onMouseHover(this.props.index)}>
                    <b><NumberFormat value={this.state.home.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />  <FaRegHeart></FaRegHeart></b>
                </button>
                
                <div className={!this.state.home.is_homie_exclusive ? 'd-none' : 'exclusive'}>
                   <b>Exclusivo de Homie</b>
                </div>
                <div className="p-2 text-muted">
                    <div className="card-text"><small>{this.state.home.abbr_address}</small></div>
                    <div className="card-text">
                        {this.state.home.bedrooms} <FaBed></FaBed> | {this.state.home.bathrooms} <FaShower></FaShower> | {this.state.home.parkings} <FaCar></FaCar> | {this.state.home.pet_friendly? 'Si' : 'No'} <FaDog></FaDog> | {this.state.home.sqare_mts}m<sup>2</sup>
                    </div>
                </div>
            </div>
        );
    }
}

export type Props = {
    home: any
    onHoverItem:Function
    index:any
}