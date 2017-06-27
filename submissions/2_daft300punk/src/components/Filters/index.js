import React from 'react';
import './style.scss';
import { categories } from '../../constants/categoriesAndFilters';
import PropTypes from 'prop-types';

/*
  The filters component hanldes filtering the data of a particular
  category. 4 filters are available as of now. This can be changed as
  needed.
*/
const Filters = ({
  selectedCategory,
  selectedFilter,
  changeSelectedFilter
}) => {
  const filters = categories[selectedCategory].filters;
  return (
    <div className="container">
      <h2>{selectedCategory.toUpperCase()}</h2>
      <p>{categories[selectedCategory].text}</p>
      <h4>Select Filters</h4>
      <ul>
        {
          filters.map((filter, i) => {
            let className = '';
            if (selectedFilter === filter.toLowerCase())
              className += 'active';
            return (
              <li
                key={i}
                onClick={() => changeSelectedFilter(filters[i])}
                className={className}
              >
                {filter}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Filters.propTypes = {
  selectedCategory: PropTypes.string,
  selectedFilter: PropTypes.string,
  changeSelectedFilter: PropTypes.func
};

export default Filters;
