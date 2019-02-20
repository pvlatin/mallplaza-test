import React from 'react';
import {
  faMapMarkerAlt,
  faBus,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const FooterInfo = () => (
  <ul className="c-footer-info__help">
    <li>
      <i>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="c-footer-info__help--firstIcon"/>
      </i>
      <span>Padre Hurtado Sur 875</span>
    </li>
    <li>
      <i>
        <FontAwesomeIcon icon={faBus} />
      </i>
      <span>¿Cómo llegar?</span>
    </li>
    <li>
      <i>
        <FontAwesomeIcon icon={faPhone}/>
      </i>
      <span>600 585 7000</span>
    </li>
  </ul>
);

export default FooterInfo;
