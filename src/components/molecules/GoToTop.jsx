import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs,
    );
    this.setState({intervalId: intervalId});
  }

  render() {
    return (
      <button
        title="Back to top"
        className="scroll scroll-footer"
        onClick={() => {
          this.scrollToTop();
        }}>
      </button>
    );
  }
}


const GoToTop = props => (
  <div className="container c-gototop">
    <span>volver arriba</span>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    <FontAwesomeIcon icon={faAngleUp} className="c-gototop__icon"/>
  </div>
);

export default GoToTop;
