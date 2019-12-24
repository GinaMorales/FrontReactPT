import React from 'react';

export default class PriceMarker extends React.Component<Props>  {
    state = {
        position: {
            lat: 0,
            lnt: 0
        }
    }

    constructor(props: any) {
        super(props);
        this.state.position = this.props.position;
    }

    render() {
        return (
            <div
                className="marker"
                title='algo'
            />
        );
    }
}

export type Props = {
    position: any
}