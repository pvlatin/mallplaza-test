import React, {Component} from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PlaceholderImageSalud from '../../images/mallplaza-nuevo/Placeholder-image-salud.png';
import PlaceholderImageGrandesTiendas from '../../images/mallplaza-nuevo/Placeholder-image-grandestiendas.png';


export default class Stores extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      initialSlide: 0,
      centerMode: false,
      slidesToShow: 2.15,
      swipeToSlide: true,
      rtl: true,
      slidesToScroll: 1
    };
    return (
      <div className="c-stores container">
        <h1 className="title-store">nuestras tiendas</h1>
        <Slider {...settings} className="slider">
          <div className="c-stores__box tienda">
            <img src={PlaceholderImageSalud} alt="" srcSet=""/>
            <h3 className="title-store">SALUD Y BELLEZA</h3>
          </div>
          <div className="c-stores__box tienda">
            <img src={PlaceholderImageGrandesTiendas} alt="" srcSet=""/>
            <h3>GRANDES TIENDAS</h3>
          </div>
          <div className="c-stores__box tienda">
            <img src={PlaceholderImageSalud} alt="" srcSet=""/>
            <h3>SALUD Y BELLEZA</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
