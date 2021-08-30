

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        Object.keys(this.markers).forEach( markerId => {
            if(!(markerId in benches)) {
                this.deleteMarker(markerId);
            }
        });
        
        Object.values(benches).forEach( bench => {
            if (!(bench.id in this.markers)) {
                this.createMarkerFromBench(bench);
            }
        });
    }

    createMarkerFromBench(bench) {
        const latlng = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position: latlng,
            title: bench.description
        });
        marker.setMap(this.map);
        this.markers[bench.id] = marker;
    }
    
    deleteMarker(id) {
        this.markers[id].setMap(null);
    }
}