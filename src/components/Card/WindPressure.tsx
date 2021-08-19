import * as React from 'react';
import windIcon from '../../assets/img/wind.svg';
import barometerIcon from '../../assets/img/barometer.svg';

type Props = {
    speed: number;
    pressure: number;
};

const WindPressure = ({ speed, pressure }: Props) => (
  <div className="wcard__stat">
    <div className="wcard__group">
      <img src={windIcon} className="wcard__icon" alt="Wind" />
      <div className="wcard__text wcard__text--ml10">{speed} m/s SSE</div>
    </div>
    <div className="wcard__group">
      <img src={barometerIcon} className="wcard__icon" alt="Barometer" />
      <div className="wcard__text wcard__text--ml10">{pressure} hPa</div>
    </div>
  </div>
);

export default WindPressure;
