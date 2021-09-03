import BenchShow from "./bench_show";
import { connect } from "react-redux";

const mapStateToProps = ({ entities }, { match }) => ({
    bench: entities.benches[match.params.benchId]
});

export default connect(mapStateToProps)(BenchShow);