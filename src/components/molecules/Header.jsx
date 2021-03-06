import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';
import Hamburger from '../atoms/Hamburger';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
      <header
        className="c-header container">
        <a href="">
          <img src={Logo} alt="" srcSet="" />
        </a>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <Hamburger show={this.props.show} menuToggler={this.props.menuClickHandler}/>
        </div>
      </header>
    );
  }
}
