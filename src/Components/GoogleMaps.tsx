import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { MapModel } from '../models/map.model';
import NumberFormat from 'react-number-format';

export class GoogleMaps extends React.Component<MapModel> {
    state = {
        currentItem: 0
    }

    constructor(props: any) {
        super(props);
        this.state = { currentItem: this.props.currentItem };
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.currentItem !== prevProps.currentItem) {
            this.setState({ currentItem: this.props.currentItem })
        }
    }

    onMarkerClick = async (props: any, marker: any, e: any) => {
        var elmnt: any = document.getElementById(props.id);
        elmnt.focus();
        elmnt.scrollIntoView({ block: "end", behavior: "smooth" });
        await this.props.onHoverItem(props.id)
    }

    render() {
        let initialCenter = { lat: 47.444, lng: -122.176 }
        let renderSVG = (price: any, first:boolean,index:number) => {
        
            return(`
            <svg width="68px" height="37px" viewBox="0 0 68 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="${index}" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-629.000000, -93.000000)" fill="${first? 'rgb(255,3,100)' : 'rgb(141,122,255)'}">
                    <g transform="translate(595.000000, 59.000000)">
                        <g transform="translate(34.000000, 34.000000)">
                            <path d="M2,4.26325641e-14 L65.9291719,-2.08721929e-14 C67.0337414,-2.1075099e-14 67.9291719,0.8954305 67.9291719,2 L67.9291719,23.1112804 C67.9291719,24.2158499 67.0337414,25.1112804 65.9291719,25.1112804 L13.1626299,25.1112804 C12.5548036,25.1112804 11.9799621,25.3876941 11.6004313,25.8624668 L3.56219864,35.9178633 C2.87249792,36.7806418 1.61396487,36.920949 0.751186393,36.2312483 C0.276413708,35.8517175 5.64608533e-09,35.276876 5.54880497e-09,34.6690497 L0,2 C-1.76786699e-10,0.8954305 0.8954305,-1.43271482e-10 2,-3.20057758e-10 Z" id="Rectangle-2"></path>
                            <text x="50%" y="40%" fill="white" alignment-baseline="middle" text-anchor="middle" font-size="12">${price}</text>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`);
        }
        const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  });

        const renderMarkers =
            this.props.items.map((item, index) => {
                
                let icon = {
                    url: 'data:image/svg+xml;utf8,' + renderSVG(formatter.format(item['price']), index == this.state.currentItem, index),
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(120, 120)
                }
                return (
                    <Marker id={index} key={item['id']} name={item['id']} icon={icon} onClick={this.onMarkerClick} position={{ lat: item['location']['lat'], lng: item['location']['lng'] }} />

                );
            });

        if (this.props.items.length) {

            initialCenter.lat = this.props.items[this.state.currentItem]['location']['lat'];
            initialCenter.lng = this.props.items[this.state.currentItem]['location']['lng'];
        }

        return (
            <Map
                google={this.props.google}
                zoom={20}
                initialCenter={{ lat: initialCenter.lat, lng: initialCenter.lng }}
                center={{ lat: initialCenter.lat, lng: initialCenter.lng }}
            >
                {renderMarkers}
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDSbrKp0tkJEnxMoxnJou7ILnLbicysdjk'
})(GoogleMaps);