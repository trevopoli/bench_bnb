import React from 'react';
import { Link } from "react-router-dom";
import BenchMap from '../bench_map/bench_map';
import BenchReviewFormContainer from '../bench_review/bench_review_form_container';
import BenchReviewIndexContainer from '../bench_review/bench_review_index_container';

class BenchShow extends React.Component {
    constructor(props) {
        super(props);

        this.benchId = this.props.benchId;

    };

    componentDidMount() {
        this.props.fetchBench(this.benchId);
        this.props.fetchBenchReviews(this.benchId);
    }

    render() {
        console.log(this.props.bench);

        let rendering;

        if (typeof this.props.bench !== 'undefined') {
            this.bench = this.props.bench;
            const benchObj = { [this.bench.id]: this.bench }

            rendering = (
                <div className = "columns" >
                    <div className="left-column">
                        <h3 className="bench-show-title">{this.bench.description}</h3>
                        <div className="bench-show-back-link">
                            <Link to="/">back to map</Link>
                        </div>
                        <div className="bench-show-img-container">
                            <img className="bench-show-img" src={this.bench.photoUrl}></img>
                        </div>
                        <div className="bench-show-map">
                            <BenchMap benches={benchObj} single={true} />
                        </div>
                    </div>  
                    <div className="right-column">
                        <BenchReviewFormContainer bench={this.bench} />
                        <BenchReviewIndexContainer avgRating={this.bench.avgRating} />
                    </div>
                </div>
            )
        } else {
            rendering = (<div className="null-holder"></div>)
        }

        return (
            <div>
                {rendering}
            </div>
        );
    };
};

export default BenchShow;

