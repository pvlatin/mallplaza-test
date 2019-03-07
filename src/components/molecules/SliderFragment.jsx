import React from 'react';
import PlaceholderImage from '../../images/mallplaza-nuevo/placeholder-img.png';

const SliderFragment = () => (
  <div className="s-slider-fragment">
    <img className="img-fluid w-100" src={PlaceholderImage} alt="news image" srcSet="" />
    <h1 className="mp-title">lo nuevo en mallplaza</h1>
    <button className="c-view-more">
      <a href="/">ver más</a>
    </button>
  </div>
);

export default SliderFragment;