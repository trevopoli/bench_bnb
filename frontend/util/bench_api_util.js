import benchesReducer from "../reducers/benches_reducer";

export const fetchBenches = (filters) => (
    $.ajax({
        method: "GET",
        url: "/api/benches",
        error: err => console.log(err),
        data: filters
    })
);

export const fetchBench = (benchId) => (
    $.ajax({
        method: "GET",
        url: `/api/benches/${benchId}`
    })
);

export const createBench = (bench) => (
    $.ajax({
        method: "POST",
        url: "/api/benches",
        data: bench,
        processData: false, 
        contentType: false
    })
);