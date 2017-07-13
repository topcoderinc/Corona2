import React from 'react';
import renderer from 'react-test-renderer';

import Welcome from '../../components/Welcome';

describe('Welcome Component', () => {
  it('renders Welcome correctly', () => {
    const component = renderer.create(
      <Welcome />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});