export const fetchBenches = (filters) => (
    $.ajax({
        method: "GET",
        url: "/api/benches",
        error: err => console.log(err),
        data: filters
    })
);