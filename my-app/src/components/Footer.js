import React from 'react';
import { VisibilityFilters } from '../actions';
import FilterLink from '../containers/FilterLink';

function Footer() {
    return(
        <di>
          <span>Show: </span>  
          <FilterLink filter={VisibilityFilters.All}>All</FilterLink>
          <FilterLink filter={VisibilityFilters.Active}>Active</FilterLink>
          <FilterLink filter={VisibilityFilters.Completed}>Completed</FilterLink>
        </di>
    )
}


export default Footer;