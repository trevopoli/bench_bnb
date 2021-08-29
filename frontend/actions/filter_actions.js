export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
import { fetchBenches } from "./bench_actions";

export const changeBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
}) 

export const updateBounds = bounds => (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return fetchBenches(getState().ui.filters)(dispatch);
}
