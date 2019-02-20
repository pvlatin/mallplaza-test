import React from 'react';
import PlaceholderImageMinchef from '../../images/mallplaza-nuevo/Placeholder-image-minchef.png';
import styled from 'styled-components';

const SliderFragmentActivities = () => (
  <div className="s-slider slider-activities">
    <h1 className="text-center text-uppercase py-1 mp-title--section">panoramas</h1>
    <img className="img-fluid w-100" src={PlaceholderImageMinchef} alt="news image" srcSet="" />
    <div className="slider-activities__box">
      <h1>ATENCIÓN MIN CHEF</h1>
      <p>Ven a Mallplaza Los Domínicos y aprende nuevas recetas</p>
    </div>
  </div>
);

export default SliderFragmentActivities;
