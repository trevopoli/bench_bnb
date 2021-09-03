import React from 'react';
import { Link } from "react-router-dom";
import BenchMap from '../bench_map/bench_map';

class BenchShow extends React.Component {
    constructor(props) {
        super(props);

        this.bench = this.props.bench;

    };

    render() {
        const benchObj = {[this.bench.id]: this.bench};

        return (
            <div className="bench-show">
                <h3>{this.bench.description}</h3>
                <Link to="/">back to map</Link>
                <BenchMap benches={benchObj} single={true}/>
            </div>
        );
    };
};

export default BenchShow;

