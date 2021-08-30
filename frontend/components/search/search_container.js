import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = ({entities, ui}) => ({
    benches: entities.benches,
    minSeating: ui.filters.minSeating,
    maxSeating: ui.filters.maxSeating
})


const mapDispatchToProps = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
