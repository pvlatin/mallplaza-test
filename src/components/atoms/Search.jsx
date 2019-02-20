import React, {Component} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default class Search extends Component {
  render() {
    return (
      <div className="c-search container">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input type="search" name="search" id="search" placeholder="Busca tiendas, ofertas o eventos"/>
      </div>
    );
  }
}
