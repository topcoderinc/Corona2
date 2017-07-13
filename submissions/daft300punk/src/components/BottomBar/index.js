import React from 'react';
import './style.scss';
import { categoryTypes } from '../../constants/categoriesAndFilters';
import PropTypes from 'prop-types';

/*
  Bottombar component that appears fixed at the bottom of the screen.
  It holds different available categories. Click on a different 
  category loads the Globe with data for that category.
*/
const BottomBar = ({
  selectedCategory,
  changeSelectedCategory
}) => {

  /*
  A helper function to assist with modifying className on the basis of 
  category text. This is used to render small colored circle marker
  ahead each of Design, Devleopment and Data Science category. The colors
  map to the colors shown on the Globe. So for ex, if data points for Design
  are green in color on the globe, a green circle appears in front of the
  Design category.
  */
  const modifyClassNameHelper = (categoryText) => {
    let className = '';
    if (categoryText == 'design')
      className += 'des';
    if (categoryText == 'data science')
      className += 'dsc';
    if (categoryText == 'development')
      className += 'dev';
    return className;
  };

  return (
    <div className="bottombar">
      <div className="logo">
        <a href="http://www.topcoder.com" target="_blank">
          <img src={require('./logo.png')} />
        </a>
      </div>
      {
        categoryTypes.map((categoryText, i) => {
          let className = 'category ';
          if (selectedCategory === categoryText)
            className += 'active';
          const classSpan = modifyClassNameHelper(categoryText);
          return (
            <div
              key={i}
              onClick={() => { changeSelectedCategory(categoryTypes[i]); }}
              className={'category-text ' + className}
            >
              <span className={classSpan}>{categoryText.toUpperCase()}</span>
            </div>
          );
        })
      }
    </div>
  );
};

BottomBar.propTypes = {
  selectedCategory: PropTypes.string,
  changeSelectedCategory: PropTypes.func
};

export default BottomBar;
