import * as actionTypes from '../constants/actionTypes';

const initialState = {
  data: [],
  vizType: 'flat',
  sizeOfPoint: 2,
  isRequesting: false,
  errorMsg: '',
};

/*
  Reducer to handle data fetching
  @vizType is set to true, if the data contains magnitude key, 
  otherwise it is set to flat.
*/
export default function (state = initialState, action) {
  let viz = 'flat';
  if (action.data && action.data.length > 0)
    viz = action.data[0].magnitude ? 'magnitude' : 'flat';
  switch (action.type) {
    case actionTypes.REQUEST_DATA:
      return Object.assign({}, state, {
        isRequesting: true
      });

    case actionTypes.RECEIVE_DATA:
      return Object.assign({}, state, {
        data: [...(action.data)],
        isRequesting: false,
        vizType: viz,
      });

    case actionTypes.ERROR:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isRequesting: false
      });
    default: return state;
  }
}
