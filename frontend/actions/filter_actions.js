export const UPDATE_FILTER = 'UPDATE_FILTER';
import { fetchBenches } from "./bench_actions";

// export const changeBounds = bounds => ({
//     type: UPDATE_BOUNDS,
//     bounds
// }) 

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
}

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
})
