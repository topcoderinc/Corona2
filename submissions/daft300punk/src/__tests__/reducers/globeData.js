import reducer from '../../reducers/globeData';
import * as actionTypes from '../../constants/actionTypes';

describe('globeData redcer tests', () => {
  const initialState = {
    data: [],
    vizType: 'flat',
    sizeOfPoint: 2,
    isRequesting: false,
    errorMsg: '',
  };

  it('should return the initial state', () => {
    expect(
      reducer(
        undefined,
        {}
      )
    ).toEqual(initialState);
  });

  it('should handle REQUEST_DATA', () => {
    const expectedState = {
      data: [],
      vizType: 'flat',
      sizeOfPoint: 2,
      isRequesting: true,
      errorMsg: '',
    };

    const action = {
      type: actionTypes.REQUEST_DATA,
    };

    expect(
      reducer(
        initialState,
        action
      )
    ).toEqual(expectedState);
  });

  it('should handle RECEIVE_DATA', () => {
    const action = {
      type: actionTypes.RECEIVE_DATA,
      data: [{ lat: 0, long: 0, magnitude: 1 }]
    };

    const state = {
      data: [],
      vizType: 'flat',
      sizeOfPoint: 2,
      isRequesting: true,
      errorMsg: ''
    };

    const expectedState = {
      data: [{ lat: 0, long: 0, magnitude: 1 }],
      vizType: 'magnitude',
      sizeOfPoint: 2,
      isRequesting: false,
      errorMsg: ''
    };

    expect(
      reducer(
        state,
        action
      )
    ).toEqual(expectedState);
  });

  it('should handle ERROR', () => {
    const state = {
      data: [],
      vizType: 'flat',
      sizeOfPoint: 2,
      isRequesting: true,
      errorMsg: ''
    };

    const action = {
      type: actionTypes.ERROR
    };

    const expectedState = Object.assign({}, state, {
      isRequesting: false
    });

    expect(
      reducer(
        state,
        action
      )
    ).toEqual(expectedState);
  });
});