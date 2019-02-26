import React, {Component} from 'react';
import Today from '../molecules/Today';
import News from '../organisms/News';
import Stores from '../organisms/Stores';
import Activities from '../organisms/Activities';
import OpenAt from '../molecules/OpenAt';
import TodayToggled from '../organisms/TodayToggled';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.todayToggle = this.todayToggle.bind(this);
    this.state = {
      todayIsOpen: false
    };
  }

  todayToggle() {
    this.setState(prevState => ({
      todayIsOpen: !prevState.todayIsOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <News />
        <TodayToggled show={this.state.todayIsOpen}/>
        <Today toggleToday={this.todayToggle} />
        <Stores />
        <Activities />
        <OpenAt />
      </React.Fragment>
    );
  }
}
