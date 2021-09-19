import BenchShow from "./bench_show";
import { connect } from "react-redux";
import { fetchBenchReviews } from "../../actions/bench_review_actions";
import { fetchBench } from "../../actions/bench_actions";

const mapStateToProps = ({ entities }, { match }) => ({
    benchId: match.params.benchId,
    bench: entities.benches[match.params.benchId]
});

const mapDispatchToProps = dispatch => ({
    fetchBenchReviews: benchId => dispatch(fetchBenchReviews(benchId)),
    fetchBench: benchId => dispatch(fetchBench(benchId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);