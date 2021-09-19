import { NEW_MAP_HIGHLIGHT, NO_MAP_HIGHLIGHT } from "../actions/highlight_actions";

const highlightReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case NEW_MAP_HIGHLIGHT:
            return {highlightBenchId: action.benchId};
        case NO_MAP_HIGHLIGHT:
            return {unhighlightBenchId: action.benchId}
        default:
            return state;
    }
}

export default highlightReducer