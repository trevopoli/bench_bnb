import React from "react";
import { Link } from "react-router-dom";

const BenchIndexItem = ({ bench }) => (
    <li>
        <Link to={`/benches/${bench.id}`}>{bench.description}</Link>
    </li>
)

export default BenchIndexItem;