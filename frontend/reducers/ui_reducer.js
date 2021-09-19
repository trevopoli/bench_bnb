import { combineReducers } from "redux";
import filtersReducer from "./filters_reducer";
import highlightReducer from "./highlight_reducer";

const uiReducer = combineReducers({
    filters: filtersReducer,
    highlight: highlightReducer
});

export default uiReducer;