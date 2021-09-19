import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';
import { newMapHighlight, noMapHighlight } from '../../actions/highlight_actions';
import Search from './search';

const mapStateToProps = ({entities, ui}) => ({
    benches: entities.benches,
    minSeating: ui.filters.minSeating,
    maxSeating: ui.filters.maxSeating,
    highlightBenchId: ui.highlight.highlightBenchId,
    unhighlightBenchId: ui.highlight.unhighlightBenchId
})


const mapDispatchToProps = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    newMapHighlight: (benchId) => dispatch(newMapHighlight(benchId)),
    noMapHighlight: (benchId) => dispatch(noMapHighlight(benchId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
