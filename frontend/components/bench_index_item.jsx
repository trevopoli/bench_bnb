import React from "react";
import { Link } from "react-router-dom";

const BenchIndexItem = ({ bench, noMapHighlight, newMapHighlight }) => {
    
    return (
        <Link to={`/benches/${bench.id}`}>
            <li onMouseOver={() => newMapHighlight(bench.id)}
                onMouseLeave={() => noMapHighlight(bench.id)}
                onClick={() => noMapHighlight(bench.id)}>
                <div className="list-bench-description">{bench.description}</div>
                <div className="list-avg-rating">Rating: {bench.avgRating}</div>
            </li>
        </Link>
    )
}

export default BenchIndexItem;