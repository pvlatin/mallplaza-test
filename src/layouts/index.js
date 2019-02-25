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
import FrontMenu from '../components/organisms/FrontMenu';

import '../scss/_builder.scss';
import Backdrop from '../components/molecules/Backdrop';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSideMenuHandler = this.toggleSideMenuHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.state = {
      sideMenuOpen: false
    };
  }


  toggleSideMenuHandler() {
    this.setState(prevState => ({
      sideMenuOpen: !prevState.sideMenuOpen
    }));
    console.log(this.state);
  }

  backdropClickHandler() {
    this.setState({
      sideMenuOpen: false
    });
  }

  render() {
    return (
      <main style={{overflow: 'hidden', height: '100%'}}>
        <Header menuClickHandler={this.toggleSideMenuHandler} show={this.state.sideMenuOpen} />
        <Search />
        <FrontMenu show={this.state.sideMenuOpen}/>
        <Backdrop backdropHandler={this.backdropClickHandler} show={this.state.sideMenuOpen}/>
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default DefaultLayout;
