import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../actions/bench_review_actions";

const benchReviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            const newReview = { [action.review.id]: action.review };
            return Object.assign({}, state, newReview);
        default:
            return state;
    };
}

export default benchReviewsReducer;