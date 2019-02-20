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
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
import Search from '../components/atoms/Search';

import '../scss/_builder.scss';

class DefaultLayout extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Search />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default DefaultLayout;
