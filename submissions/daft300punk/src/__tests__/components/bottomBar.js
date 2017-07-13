import React from 'react';
import renderer from 'react-test-renderer';

import BottomBar from '../../components/BottomBar';

describe('Bottombar Component', () => {
  it('renders Bottombar correctly', () => {
    const component = renderer.create(
      <BottomBar
        selectedCategory={'all activity'}
        changeSelectedCategory={() => { }}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});