import BenchShow from "./bench_show";
import { connect } from "react-redux";
import { fetchBenchReviews } from "../../actions/bench_review_actions";

const mapStateToProps = ({ entities }, { match }) => ({
    bench: entities.benches[match.params.benchId]
});

const mapDispatchToProps = dispatch => ({
    fetchBenchReviews: benchId => dispatch(fetchBenchReviews(benchId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);