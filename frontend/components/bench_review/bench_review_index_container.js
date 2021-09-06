import { connect } from "react-redux";
import BenchReviewIndex from "./bench_review_index";
import { fetchBenches } from "../../actions/bench_actions";

const mapStateToProps = ({ entities: {benchReviews} }, { avgRating }) => ({
    benchReviews: benchReviews,
    avgRating: avgRating
})

const mapDispatchToProps = dispatch => ({
    fetchBenches: benchId => dispatch(fetchBenches(benchId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchReviewIndex);