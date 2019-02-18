import React from 'react';
import {Link} from 'gatsby';
import gray from 'gray-percentage';
import SearchIcon from 'react-icons/lib/md/search';
import 'typeface-rochester';
import 'typeface-josefin-sans';
import 'typeface-josefin-slab';
import {rhythm, scale} from '../utils/typography';
import constants from '../utils/constants';
import styled from 'styled-components';

import '../scss/_builder.scss';

const HeaderOrFooter = styled.header`
  background-color: #333;
  h1 {
    color: #f6f6f6;
    font-size: 50px;
    text-align: center;
    padding: 100px 0;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <HeaderOrFooter>
          <h1>header</h1>
        </HeaderOrFooter>
        {this.props.children}
        <HeaderOrFooter>
          <h1>footer</h1>
        </HeaderOrFooter>
      </div>
    );
  }
}

export default DefaultLayout;
