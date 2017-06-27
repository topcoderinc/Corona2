import reducer from '../../reducers/firstLoad';
import * as actionTypes from '../../constants/actionTypes';

describe('firstLoad reducer', () => {

  const initialState = {
    showAnimation: false,
    isFirstLoad: true
  };

  it('should return the initial state', () => {
    expect(
      reducer(
        undefined,
        {}
      )
    ).toEqual(
      initialState
      );
  });

  it('should handle FIRST_LOAD', () => {
    const expectedState = {
      isFirstLoad: false,
      showAnimation: false
    };

    const action = {
      type: actionTypes.FIRST_LOAD
    };

    expect(
      reducer(
        initialState,
        action
      )
    ).toEqual(expectedState);
  });

  it('should handle SHOW_ANIMATION', () => {
    const state = {
      showAnimation: false,
      isFirstLoad: false
    };

    const action = {
      type: actionTypes.SHOW_ANIMATION,
      showAnimation: true
    };

    const expectedState = {
      showAnimation: true,
      isFirstLoad: false
    };

    expect(
      reducer(
        state,
        action
      )
    ).toEqual(expectedState);
  });
});
