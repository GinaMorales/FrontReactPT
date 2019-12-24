import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
 
export default class Carousel extends React.Component<Props> {
    state = {
        photos:[]
    }

    constructor(props: any) {
        super(props);
        this.state = { photos: this.props.photos };
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.photos !== prevProps.photos) {
            this.setState({ photos: this.props.photos });
        }
    }

    render() {

        const slide = this.state.photos.map((photo: any, index) => {
            return (
                <Slide index={index}><img src={photo} className="card-img-top"/></Slide> 
              );
        });

        return (
        <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={200}
            totalSlides={this.state.photos.length}>
            <Slider>
                {slide}
            </Slider>
            <ButtonBack className="carousel-control-prev text-dark btn-slide"><FaAngleLeft></FaAngleLeft></ButtonBack>
            <ButtonNext className="carousel-control-next text-dark btn-slide"><FaAngleRight></FaAngleRight></ButtonNext>
        </CarouselProvider>
        );
    }
}

export type Props = {
    photos: any
}