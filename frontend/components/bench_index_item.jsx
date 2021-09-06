import React from "react";
import { Link } from "react-router-dom";

const BenchIndexItem = ({ bench }) => (
    <li>
        <Link to={`/benches/${bench.id}`}>{bench.description}</Link>
        <div className="avg-rating-list">Rating: {bench.avgRating}</div>
    </li>
)

export default BenchIndexItem;