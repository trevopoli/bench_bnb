import { UPDATE_FILTER } from "../actions/filter_actions"

const DEFAULT_STATE = {
    bounds: {},
    minSeating: 1,
    maxSeating: 10
};

const filtersReducer = (state = DEFAULT_STATE, action) => {
    Object.freeze(state);

    switch (action.type) {
        case UPDATE_FILTER:
            return Object.assign({}, state, { [action.filter]: action.value });
        default:
            return state;
    };
};

export default filtersReducer;