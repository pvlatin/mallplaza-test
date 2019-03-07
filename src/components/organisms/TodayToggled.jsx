import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faClock,
  faUserClock
} from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class TodayToggled extends Component {
  render() {
    let todayClasses = "c-todayToggled";
    if (this.props.show) {
      todayClasses = "c-todayToggled todayIsOpen";
    }
    return (
      <div className={todayClasses}>
        <span className="c-todayToggled__subtitle">Qué está pasando</span>
        <h1 className="c-todayToggled__title">hoy en mallplaza</h1>
        <Tabs
          className="c-today-tabs"
          defaultIndex={1}
          onSelect={index => console.log(index)}>
          <TabList className="c-today-tabs__tabs">
            <Tab className="c-today-tabs__tab">panoramas</Tab>
            <Tab className="c-today-tabs__tab">horarios</Tab>
            <Tab className="c-today-tabs__tab">descuentos</Tab>
          </TabList>
          <TabPanel className="c-today-tabs__panel">
            <div className="c-today-tabs__info">
              <div className="c-today-tabs__info__main">
                <FontAwesomeIcon icon={faClock} className="icon" />
                <span className="c-today-tabs__info-title">abierto ahora</span>
                <span className="c-today-tabs__info-subtitle">
                  tda hasta las 21:30hrs
                </span>
              </div>
              <ul className="c-today-tabs__info-list">
                <li>
                  <strong>
                    <span className="text-bold mr-20">Estacionamiento:</span>
                  </strong>
                  <span>07:00 a 21:30hrs</span>
                </li>
                <li>
                  <strong>
                    <span className="text-bold mr-20">Patio de Comidas:</span>
                  </strong>
                  <span>10:00 a 22:00hrs</span>
                </li>
                <li>
                  <strong>
                    <span className="text-bold mr-20">La Azotea:</span>
                  </strong>
                  <span>10:00 a 00:00hrs</span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className="c-today-tabs__panel">
            <div className="c-today-tabs__info">
              <div className="c-today-tabs__info__main">
                <FontAwesomeIcon icon={faClock} className="icon" />
                <span className="c-today-tabs__info-title">abierto ahora</span>
                <span className="c-today-tabs__info-subtitle">
                  hasta las 21:30hrs
                </span>
              </div>
              <ul className="c-today-tabs__info-list">
                <li>
                  <strong>
                    <span className="text-bold mr-20">Estacionamiento:</span>
                  </strong>
                  <span>07:00 a 21:30hrs</span>
                </li>
                <li>
                  <strong>
                    <span className="text-bold mr-20">Patio de Comidas:</span>
                  </strong>
                  <span>10:00 a 22:00hrs</span>
                </li>
                <li>
                  <strong>
                    <span className="text-bold mr-20">La Azotea:</span>
                  </strong>
                  <span>10:00 a 00:00hrs</span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className="c-today-tabs__panel">
            <div className="c-today-tabs__info">
              <div className="c-today-tabs__info__main">
                <FontAwesomeIcon icon={faClock} className="icon" />
                <span className="c-today-tabs__info-title">abierto ahora</span>
                <span className="c-today-tabs__info-subtitle">
                  hasta las 21:30hrs
                </span>
              </div>
              <ul className="c-today-tabs__info-list">
                <li>
                  <strong>
                    <span className="text-bold mr-20">Estacionamiento:</span>
                  </strong>
                  <span>07:00 a 21:30hrs</span>
                </li>
                <li>
                  <strong>
                    <span className="text-bold mr-20">Patio de Comidas:</span>
                  </strong>
                  <span>10:00 a 22:00hrs</span>
                </li>
                <li>
                  <strong>
                    <span className="text-bold mr-20">La Azotea:</span>
                  </strong>
                  <span>10:00 a 00:00hrs</span>
                </li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
