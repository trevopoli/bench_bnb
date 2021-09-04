import * as BenchReviewAPIUtil from '../util/bench_review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"


export const receiveBenchReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveBenchReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const createBenchReview = (review) => dispatch => (
    BenchReviewAPIUtil.createBenchReview(review).then(
        review => dispatch(receiveBenchReview(review))
    )
);

export const fetchBenchReviews = benchId => dispatch => (
    BenchReviewAPIUtil.fetchBenchReviews(benchId).then(
        reviews => dispatch(receiveBenchReviews(reviews))
    )
);