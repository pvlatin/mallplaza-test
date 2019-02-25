import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitter, faYoutubeSquare, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const RRSS = props => (
  <div className="c-footer-info__rrss">
    <ul className="container c-footer-info__rrss">
      <li className="c-footer-info__rrss__icon">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </li>
      <li className="c-footer-info__rrss__icon">
        <FontAwesomeIcon icon={faTwitter} />
      </li>
      <li className="c-footer-info__rrss__icon">
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </li>
      <li className="c-footer-info__rrss__icon">
        <FontAwesomeIcon icon={faInstagram} />
      </li>
      <li className="c-footer-info__rrss__icon">
        <FontAwesomeIcon icon={faLinkedin} />
      </li>
    </ul>
  </div>
);

export default RRSS;
