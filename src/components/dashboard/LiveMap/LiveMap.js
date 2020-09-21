import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Maker from "components/dashboard/Marker";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class LiveMap extends Component {

    static defaultProps = {
        center: {
            lat: 47.614879,
            lng: -122.317133,
        },
        zoom: 16
    };

    render() {
        return (
            <div className="elastic">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>

                    {this.props.drones.map(drone => {
                        return (<Maker
                            key={drone.id}
                            delta={drone.d}
                            lat={drone.lat}
                            lng={drone.lng}
                        />)
                    })}

                </GoogleMapReact>
            </div>
        );
    }
}

export default LiveMap;