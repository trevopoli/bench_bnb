export const createBenchReview = (bench_review) => (
    $.ajax({
        method: "POST",
        url: "api/bench_reviews",
        data: bench_review
    })
);

export const fetchBenchReviews = (bench_id) => (
    $.ajax({
        method: "GET",
        url: "api/bench_reviews",
        data: {bench_id: bench_id}
    })
)