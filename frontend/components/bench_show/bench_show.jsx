import React from 'react';
import { Link } from "react-router-dom";
import BenchMap from '../bench_map/bench_map';
import BenchReviewFormContainer from '../bench_review/bench_review_form_container';
import BenchReviewIndexContainer from '../bench_review/bench_review_index_container';

class BenchShow extends React.Component {
    constructor(props) {
        super(props);

        this.bench = this.props.bench;

    };

    componentDidMount() {
        this.props.fetchBenchReviews(this.bench.id);
    }

    render() {
        const benchObj = {[this.bench.id]: this.bench};

        return (
            <div className="bench-show">
                <h3>{this.bench.description}</h3>
                <Link to="/">back to map</Link>
                <BenchMap benches={benchObj} single={true}/>
                <img className="bench-show-img" src={this.bench.photoUrl}></img>
                <BenchReviewFormContainer bench={this.bench} />
                <BenchReviewIndexContainer avgRating={this.bench.avgRating}/>
            </div>
        );
    };
};

export default BenchShow;

