

export default class MarkerManager {
    constructor(map, history) {
        this.map = map;
        this.markers = {};
        this.history = history;
    }

    updateMarkers(benches, highlightBenchId) {
        Object.keys(this.markers).forEach( markerId => {
            if(!(markerId in benches)) {
                this.deleteMarker(markerId);
            }
        });
        
        Object.values(benches).forEach( bench => {
            let highlight = (bench.id === highlightBenchId) ? true : false;
            if (!(bench.id in this.markers)) {
                this.createMarkerFromBench(bench);
            }
        });
    }

    highlightMarker(highlightBenchId) {
        this.markers[highlightBenchId].setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png")
    }

    unhighlightMarker(unhighlightBenchId) {
        this.markers[unhighlightBenchId].setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
    }

    createMarkerFromBench(bench) {        
        const latlng = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position: latlng,
            title: bench.description,
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });
        marker.addListener("click", () => {
            this.history.push(`/benches/${bench.id}`);
        });
        marker.setMap(this.map);
        this.markers[bench.id] = marker;
    }
    
    deleteMarker(id) {
        this.markers[id].setMap(null);
    }
}