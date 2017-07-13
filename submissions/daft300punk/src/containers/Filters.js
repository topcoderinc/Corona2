import React from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { changeSelectedFilter } from '../actions';
import PropTypes from 'prop-types';

/*
  See Fitlers component to get the idea. @selectedCategory
  is the currently selected category out of 5 available.
  @changeSelectedFilter is a bound dispathcer that gets
  called when the user clicks on a filter other than current.
  @selectedFilter is the currently selected filter from the list
  of available 4.
*/
const FiltersContainer = ({
  selectedCategory,
  changeSelectedFilter,
  selectedFilter
}) => {
  return (
    <Filters
      selectedCategory={selectedCategory}
      changeSelectedFilter={changeSelectedFilter}
      selectedFilter={selectedFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedOptions.category,
  selectedFilter: state.selectedOptions.filter
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedFilter: (filter) => { dispatch(changeSelectedFilter(filter)); }
});

FiltersContainer.propTypes = {
  selectedCategory: PropTypes.string,
  selectedFilter: PropTypes.string,
  changeSelectedFilter: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
