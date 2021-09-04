import BenchReviewForm from "./bench_review_form";
import { connect } from "react-redux";
import { createBenchReview } from "../../actions/bench_review_actions";

const mapStateToProps = ({ session }, { match }) => ({
    // bench: entities.benches[match.params.benchId],
    user_id: session.id
});

const mapDispatchToProps = dispatch => ({
    createBenchReview: review => dispatch(createBenchReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchReviewForm);