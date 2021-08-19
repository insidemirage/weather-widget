import * as React from 'react';

const ICON_LINK = 'https://openweathermap.org/img/wn/';

type Props = {
    icon: string;
    temperature: number;
    time: number;
    sunrise: number;
    sunset: number;
};

const WeatherInfo = ({
  icon, temperature, time, sunrise, sunset
}: Props) => {
  const isNight = time > sunset || time < sunrise;
  return (
    <div className={`wcard__weather ${isNight ? 'wcard__weather--night' : ''}`}>
      <img src={`${ICON_LINK}${icon}@2x.png`} alt="" />
      <div className="wcard__temp">{temperature} °C</div>
    </div>
  );
};

export default WeatherInfo;
