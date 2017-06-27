import * as actionTypes from '../constants/actionTypes';
import initGlobe from '../components/Globe/libs/initGlobe';
import getDataApi from '../utils/mockDataApi';


export const firstLoad = () => ({
  type: actionTypes.FIRST_LOAD,
});

export const animate = (showAnimation) => ({
  type: actionTypes.SHOW_ANIMATION,
  showAnimation: showAnimation
});

export const category = (selectedCategory) => ({
  type: actionTypes.CHANGE_SELECTED_CATEGORY,
  selectedCategory: selectedCategory.toLowerCase()
});

export const filter = (selectedFilter) => ({
  type: actionTypes.CHANGE_SELECTED_FILTER,
  selectedFilter: selectedFilter.toLowerCase()
});

/*
  Dispatched when the selected filter is changed. The data is fetched and
  Globe instance is reinitialized with fetched data
*/
export const changeSelectedFilter = (selectedFilter) => (dispatch, getState) => {
  const currentFilter = getState().selectedOptions.filter;
  if (selectedFilter.toLowerCase() !== currentFilter) {
    dispatch(filter(selectedFilter));

    dispatch(getData());
    initGlobe();
  }
};

/*
  Dispatched when the selected category is changed. The data is fetched and
  Globe instance is reinitialized with fetched data.
*/
export const changeSelectedCategory = (selectedCategory) => (dispatch, getState) => {
  const currentCategory = getState().selectedOptions.category;

  if (selectedCategory.toLowerCase() !== currentCategory) {
    dispatch(category(selectedCategory));
    dispatch(getData());
    initGlobe();
  }
};


export const requestData = () => ({
  type: actionTypes.REQUEST_DATA
});

export const receiveData = (data) => ({
  type: actionTypes.RECEIVE_DATA,
  data: data
});

export const error = (err) => ({
  type: actionTypes.ERROR,
  errorMessage: err
});

/*
  Dispatched when data needs to be fetched. Checks if the application is loading 
  for the first time. If it is, welcome animation is shown, in addition to fetching
  data.
*/
export const getData = () => (dispatch, getState) => {
  // Check if application is loading for first time
  const isFirstLoad = getState().firstLoad.isFirstLoad;

  dispatch(requestData());

  const category = getState().selectedOptions.category;
  const filter = getState().selectedOptions.filter;

  // Get data from mock api
  getDataApi(category, filter)
    .then(res => {
      dispatch(receiveData(JSON.parse(res)));

      // Show animation on first load.
      if (isFirstLoad) welcomeHelper(dispatch);
    })
    .catch(err => {
      dispatch(error(err));
    });
};

/*
  A helper function to deal with welcome animation that is shown
  on first load.
*/
export const welcomeHelper = (dispatch) => {
  dispatch(firstLoad());
  dispatch(animate(true));

  // Remove the Welcome component after 2.5s.
  setTimeout(() => {
    dispatch(animate(false));
  }, 2500);
};

