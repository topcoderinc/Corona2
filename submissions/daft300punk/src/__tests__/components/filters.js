import React from 'react';
import renderer from 'react-test-renderer';

import Filters from '../../components/Filters';

describe('Filters Component', () => {
  it('renders Filters correctly', () => {
    const component = renderer.create(
      <Filters
        selectedCategory={'all activity'}
        changeSelectedCategory={() => { }}
        selectedFilter={'all time'}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});