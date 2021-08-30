import React from 'react';
import BenchIndex from '../bench_index';
import BenchMap from '../bench_map/bench_map';
import FilterForm from './filter_form';

const Search = ({benches, fetchBenches, updateFilter, minSeating, maxSeating}) => {
    
    return (
        <div>
            <BenchMap benches={benches} updateFilter={updateFilter} />
            <FilterForm updateFilter={updateFilter} minSeating={minSeating} maxSeating={maxSeating} />
            <BenchIndex benches={benches} fetchBenches={fetchBenches} />
        </div>
    );
}

export default Search;