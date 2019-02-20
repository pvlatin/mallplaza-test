import React, {Component} from 'react';
import LogoFooter from '../../images/logo-footer.png';
import RRSS from '../molecules/RRSS';
import GoToTop from '../molecules/GoToTop';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <img src={LogoFooter} alt="" srcSet=""/>
        <h1>contáctanos</h1>
        <div className="c-footer-info">
          <RRSS />
          <FooterInfo />
          <FooterLinks />
        </div>
        <GoToTop />
      </footer>
    );
  }
}
