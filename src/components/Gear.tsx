import * as React from 'react';
import './Gear.scss';
import gearIcon from '../assets/img/gear.svg';

const Gear = () => (
  <div className="weather-gear">
    <img src={gearIcon} alt="Gear" className="weather-gear__image" />
  </div>
);

export default Gear;
