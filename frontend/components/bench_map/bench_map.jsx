import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);

        this.map.addListener("idle", e => {
            const googleBounds = this.map.getBounds();

            const bounds = {
                "northEast": {
                    "lat": googleBounds.getNorthEast().lat(),
                    "lng": googleBounds.getNorthEast().lng()
                },
                "southWest": {
                    "lat": googleBounds.getSouthWest().lat(),
                    "lng": googleBounds.getSouthWest().lng()
                }
            };

            this.props.updateBounds(bounds);
        });
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render () {

        return(
            <div id='map-container' ref={ map => this.mapNode = map }>

            </div>
        );
    };
}

export default BenchMap