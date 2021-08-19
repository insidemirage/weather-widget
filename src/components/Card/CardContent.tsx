import * as React from 'react';
import windTitles from 'assets/wind_types.json';
import WeatherInfo from './WeatherInfo';
import { IWeatherData } from '../../types/apiTypes';
import WindPressure from './WindPressure';
import HumidityDew from './HumidityDew';
import Visibility from './Visibility';

const getWindText = (windSpeed: number) => {
  for (let i = 0; i < windTitles.length; i++) {
    const { speed, text } = windTitles[i];
    if (windSpeed <= speed) {
      return text;
    }
  }
  return 'Unknown wind power.';
};

const getCelsiusTemp = (temp: number) => Math.round(temp - 273.15);

type Props = {
    data: IWeatherData
};

const CardContent = ({ data }: Props) => {
  const { speed } = data.wind;
  const { description, icon } = data.weather[0];
  const {
    /* eslint-disable-next-line camelcase */
    feels_like, temp, pressure, humidity
  } = data.main;
  const { sunrise, sunset } = data.sys;
  const celsiusTemp = getCelsiusTemp(temp);
  const celsiusFeelsLike = getCelsiusTemp(feels_like);
  const windSpeed = getWindText(speed);
  return (
    <>
      <div className="wcard__title">
        {data.name}, {data.sys.country}
      </div>
      <WeatherInfo
        icon={icon}
        temperature={celsiusTemp}
        time={data.dt}
        sunrise={sunrise}
        sunset={sunset}
      />
      <div className="wcard__desc">
        Feels like {celsiusFeelsLike}°C. {description}. {windSpeed}.
      </div>
      <WindPressure speed={speed} pressure={pressure} />
      <HumidityDew humidity={humidity} temp={celsiusTemp} />
      <Visibility visibility={data.visibility} />
    </>
  );
};

export default CardContent;
