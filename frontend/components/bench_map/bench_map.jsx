import React from 'react';
import { Redirect, withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
    constructor(props) {
        super(props);

        this.addListeners = this.addListeners.bind(this);
    };

    componentDidMount() {
        // set the map to show SF
        let mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        }

        if(this.props.single) {
            const bench = Object.values(this.props.benches)[0];
            mapOptions = {
                center: { lat: bench.lat, lng: bench.lng},
                zoom: 14,
                draggable: false, 
                zoomControl: false, 
                crollwheel: false, 
                disableDoubleClickZoom: true
            }
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.props.history);
        this.MarkerManager.updateMarkers(this.props.benches);


        if (!this.props.single) {
            this.addListeners();
        }
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    addListeners() {
        // move map and update bounds
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

            this.props.updateFilter('bounds', bounds);
        });

        // click to add new bench
        this.map.addListener("click", e => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            this.props.history.push({
                pathname: "benches/new",
                search: `lat=${lat}&lng=${lng}`
            });
        });
    }

    render () {

        return(
            <div id='map-container' ref={ map => this.mapNode = map }>

            </div>
        );
    };
}

export default withRouter(BenchMap);