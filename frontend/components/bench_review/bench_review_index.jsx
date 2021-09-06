import React from 'react';

const BenchReviewIndex = ({ benchReviews, avgRating }) => {

    const commentItems = Object.values(benchReviews).map( r => {
        return (
            <li key={r.id}>
                <div className="review-rating">Rating: {r.rating}</div>
                <div className="review-comment">{r.comment}</div>
            </li>
        )
    });

    return (
        <div className="bench-review-list-container">
            <h3>Reviews</h3>
            <h5>Average Rating: {avgRating}</h5>
            <ul className="bench-review-list">
                { commentItems }
            </ul>
        </div>
    )
}

export default BenchReviewIndex;