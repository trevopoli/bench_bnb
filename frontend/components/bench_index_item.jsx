import React from "react";
import { Link } from "react-router-dom";

const BenchIndexItem = ({ bench }) => (
    
        <Link to={`/benches/${bench.id}`}>
            <li>
                <div className="list-bench-description">{bench.description}</div>
                <div className="list-avg-rating">Rating: {bench.avgRating}</div>
            </li>
        </Link>
)

export default BenchIndexItem;