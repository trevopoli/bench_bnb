import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_BENCH_ERRORS = "RECEIVE_BENCH_ERRORS";

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench
});

export const receiveBenchErrors = errors => ({
    type: RECEIVE_BENCH_ERRORS,
    errors
});

export const fetchBenches = filters => dispatch => (
    BenchAPIUtil.fetchBenches(filters).then(
        benches => dispatch(receiveBenches(benches))
    )
);

export const fetchBench = benchId => dispatch => (
    BenchAPIUtil.fetchBench(benchId).then(
        bench => dispatch(receiveBench(bench))
    )
);

export const createBench = bench => dispatch => (
    BenchAPIUtil.createBench(bench).then(
        bench => dispatch(receiveBench(bench)),
        errors => dispatch(receiveBenchErrors(errors.responseJSON))
    )
);