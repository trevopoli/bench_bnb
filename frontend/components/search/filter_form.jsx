import React from 'react';

const handleChange = (filter, updateFilter) => e => {
    updateFilter(filter, parseInt(e.target.value));
}

const FilterForm = ({updateFilter, minSeating, maxSeating}) => (
    <div className="seating-filters">
        <label className="min-seating-filter-input">Min Seating: </label>
        <input type="number" 
            min="0"
            max="20"
            value={minSeating}
            onChange={handleChange("minSeating", updateFilter)} 
            className="min-seating-filter-input" />

        <label className="max-seating-filter-input">Max Seating: </label>
        <input 
            type="number" 
            value={maxSeating}
            min="0"
            max="20" 
            onChange={handleChange("maxSeating", updateFilter)}
            className="max-seating-filter-input" />
    </div>
);

export default FilterForm;