import React, {Component} from 'react';
import LogoFooter from '../../images/logo-footer.png';
import RRSS from '../molecules/RRSS';
import GoToTop from '../molecules/GoToTop';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer pt-5 border-margin__top">
        <img src={LogoFooter} alt="" srcSet=""/>
        <p className="text-center h4 text-uppercase">contáctanos</p>
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
