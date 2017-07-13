import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../components/BottomBar';
import { changeSelectedCategory } from '../actions';
import PropTypes from 'prop-types';

/*
  See BottomBar component to get the idea. @selectedCategory
  is the currently selected category out of 5 available.
  @changeSelectedCategory is a bound dispathcer that gets
  called when the user clicks on a category other than current.
*/
const BottomBarContainer = ({
  selectedCategory,
  changeSelectedCategory
}) => {
  return (
    <BottomBar
      selectedCategory={selectedCategory}
      changeSelectedCategory={changeSelectedCategory}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedOptions.category
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedCategory: (filter) => { dispatch(changeSelectedCategory(filter)); }
});

BottomBarContainer.propTypes = {
  selectedCategory: PropTypes.string,
  changeSelectedCategory: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);
