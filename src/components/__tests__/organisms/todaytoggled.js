import React from 'react';
import renderer from 'react-test-renderer';

import TodayToggled from '../../organisms/TodayToggled';

describe('News', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodayToggled siteTitle="Default Starter" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
