import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions';

describe('Sync action creators', () => {
  it('should create action for first load', () => {
    const expectedAction = {
      type: actionTypes.FIRST_LOAD
    };

    expect(actions.firstLoad())
      .toEqual(expectedAction);
  });

  it('should create action for showing animation', () => {
    const expectedAction = {
      type: actionTypes.SHOW_ANIMATION,
      showAnimation: true
    };

    expect(actions.animate(true))
      .toEqual(expectedAction);
  });

  it('should create action for changing selected category', () => {
    const expectedAction = {
      type: actionTypes.CHANGE_SELECTED_CATEGORY,
      selectedCategory: 'design'
    };

    expect(actions.category('design'))
      .toEqual(expectedAction);
  });

  it('should create action for changing selected filter', () => {
    const expectedAction = {
      type: actionTypes.CHANGE_SELECTED_FILTER,
      selectedFilter: 'last week'
    };

    expect(actions.filter('last week'))
      .toEqual(expectedAction);
  });

  it('should create action for requesting data', () => {
    const expectedAction = {
      type: actionTypes.REQUEST_DATA
    };

    expect(actions.requestData())
      .toEqual(expectedAction);
  });

  it('should create action for receiving data', () => {
    const data = [
      { lat: 1, long: 1 },
      { lat: 2, long: 2 }
    ];

    const expectedAction = {
      type: actionTypes.RECEIVE_DATA,
      data: data
    };

    expect(actions.receiveData(data))
      .toEqual(expectedAction);
  });

  it('should create action for setting error', () => {
    const errorMessage = 'Critical error';

    const expectedAction = {
      type: actionTypes.ERROR,
      errorMessage: errorMessage
    };

    expect(actions.error(errorMessage))
      .toEqual(expectedAction);
  });
});