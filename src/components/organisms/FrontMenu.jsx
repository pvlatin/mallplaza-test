import React, {Component} from 'react';
import Login from '../molecules/Login';

const FrontMenu = props => {
  let menuClasses = ['s-front-menu'];
  if (props.show) {
    menuClasses = 's-front-menu open';
  }
  return (
    <nav className={menuClasses}>
      <ul>
        <li>
          <a href="/tiendas">TIENDAS</a>
        </li>
        <li>
          <a href="/catalogo-productos">CATÁLOGO PRODUCTOS</a>
        </li>
        <li>
          <a href="/tiendas">DESCUENTOS</a>
        </li>
        <li>
          <a href="/tiendas">RESTAURANTES</a>
        </li>
        <li>
          <a href="/tiendas">PANORAMAS</a>
        </li>
        <li>
          <a href="/tiendas">ESTACIONAMINETOS</a>
        </li>
        <li>
          <a href="/tiendas">SERVICIOS MALL</a>
        </li>
      </ul>
      <Login />
    </nav>
  );
};

export default FrontMenu;
