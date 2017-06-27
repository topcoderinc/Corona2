import reducer from '../../reducers/selectedOptions';
import * as actionTypes from '../../constants/actionTypes';

describe('Test selectedOptions reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer(
        undefined,
        {}
      )
    ).toEqual({
      category: 'all activity',
      filter: 'all time'
    });
  });

  it('should hanlde CHANGE_SELECTED_CATEGORY', () => {
    const state = {
      category: 'all activity',
      filter: 'all time'
    };

    const action = {
      type: actionTypes.CHANGE_SELECTED_CATEGORY,
      selectedCategory: 'design'
    };

    expect(
      reducer(
        state,
        action
      )
    ).toEqual({
      category: 'design',
      filter: 'all time'
    });
  });

  it('should handle CHANGE_SELECTED_FILTER', () => {
    const state = {
      category: 'design',
      filter: 'all time'
    };

    const action = {
      type: actionTypes.CHANGE_SELECTED_FILTER,
      selectedFilter: 'last month'
    };

    expect(
      reducer(
        state,
        action
      )
    ).toEqual({
      category: 'design',
      filter: 'last month'
    });
  });
});