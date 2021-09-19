import React from 'react';
import BenchIndex from '../bench_index';
import BenchMap from '../bench_map/bench_map';
import FilterForm from './filter_form';

const Search = ({benches, fetchBenches, updateFilter, highlightBenchId, 
    minSeating, maxSeating, newMapHighlight, unhighlightBenchId, noMapHighlight}) => {
    
    return (
        <div className="columns">
            <div className="left-column">
                <BenchMap benches={benches} 
                    updateFilter={updateFilter} 
                    highlightBenchId={highlightBenchId}
                    unhighlightBenchId={unhighlightBenchId} />
                <div className="map-cta">
                    <h3>Click on map to add a new bench!</h3>
                </div>
            </div>
            <div className="right-column">
                <div className="filter-form">
                    <FilterForm updateFilter={updateFilter} minSeating={minSeating} maxSeating={maxSeating} />
                </div>
                <div className="bench-map-list">
                    <BenchIndex 
                        benches={benches} 
                        fetchBenches={fetchBenches}
                        newMapHighlight={newMapHighlight}
                        noMapHighlight={noMapHighlight} />
                </div>
            </div>
        </div>
    );
}

export default Search;