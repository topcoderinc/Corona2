import * as actionTypes from '../constants/actionTypes';
import { categories, categoryTypes } from '../constants/categoriesAndFilters';

const initialState = {
  category: categoryTypes[0].toLowerCase(),
  filter: categories[categoryTypes[0]].filters[0].toLowerCase()
};

/*
  Handle the state related to selected category and filters.
  The filter defaults to the first filter available in 
  filters key of category array. See @categories constant.
  Similarly, category defaults to the first available category
  in the list of categories.
*/
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SELECTED_CATEGORY:
      return Object.assign({}, state, {
        category: action.selectedCategory,
        filter: (categories[action.selectedCategory].filters)[0].toLowerCase()
      });

    case actionTypes.CHANGE_SELECTED_FILTER:
      return Object.assign({}, state, {
        filter: action.selectedFilter
      });

    default: return state;
  }
}
