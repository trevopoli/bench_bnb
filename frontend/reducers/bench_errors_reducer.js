import { RECEIVE_BENCH_ERRORS, RECEIVE_BENCH } from "../actions/bench_actions";

const benchErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BENCH_ERRORS:
            return action.errors;
        case RECEIVE_BENCH:
            return [];
        default:
            return state;
    }
}

export default benchErrorsReducer;