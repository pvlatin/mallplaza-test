import React, {Component} from 'react';
import Slider from 'react-slick';
import SliderFragmentActivities from '../molecules/SliderFragmentActivities';
import styled from 'styled-components';


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

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="s-activities">
        <Slider {...settings}>
          <SliderFragmentActivities />
          <SliderFragmentActivities />
          <SliderFragmentActivities />
          <SliderFragmentActivities />
        </Slider>
      </div>
    );
  }
}
