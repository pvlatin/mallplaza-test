import React, {Component} from 'react';
import Slider from 'react-slick';
import SliderFragment from '../molecules/SliderFragment';
import styled from 'styled-components';
import PlaceholderImage from '../../images/mallplaza-nuevo/placeholder-img.png';

const sliderData = [
  {
    id: 0,
    title: 'lo nuevo en mallplaza',
    hey: 'hola'
  },
  {
    id: 1,
    title: 'lo nuevo en mallplaza',
    hey: 'hola'
  },
  {
    id: 2,
    title: 'lo nuevo en mallplaza',
    hey: 'hola'
  },
  {
    id: 3,
    title: 'lo nuevo en mallplaza',
    hey: 'hola'
  }
];

export default class News extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      autoplaySpeed: 5000,
      autoplay: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="c-news border-margin__bottom">
        <Slider {...settings}>
          <SliderFragment />
          <SliderFragment />
          <SliderFragment />
          <SliderFragment />
        </Slider>
      </div>
    );
  }
}
