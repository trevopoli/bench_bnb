import { combineReducers } from "redux";
import benchesReducer from "./benches_reducer";
import usersReducer from "./users_reducer";
import benchReviewsReducer from "./bench_reviews_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    benches: benchesReducer,
    benchReviews: benchReviewsReducer
});


export default entitiesReducer;