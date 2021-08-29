import BenchIndexItem from "./bench_index_item";
import React from "react";

class BenchIndex extends React.Component {
    constructor(props){
        super(props);

    };
    
    componentDidMount () {
        // this.props.fetchBenches();
    };

    render () {
        let benches = Object.values(this.props.benches);

        return (
            <ul className="bench-list">
                {benches.map( (bench, idx) => <BenchIndexItem key={idx} bench={bench} />)}
            </ul>
        )
    };
};


export default BenchIndex;