import React from 'react';

function VisibilityFilter({filters}) {
    return(
        filters.map((filter,i) => <button key = {'filter-${i}'}>{filter}</button>)
    )
}

export default VisibilityFilter;



