import * as React from 'react';

const calculateDewPoint = (temperature: number, humidity: number) => {
  const firstSub = temperature - (14.55 + 0.114 * temperature) * (1 - (0.01 * humidity));
  const secondSub = ((2.5 + 0.007 * temperature) * (1 - (0.01 * humidity))) ** 3;
  const thirdSub = (15.9 + 0.117 * temperature) * (1 - (0.01 * humidity)) ** 14;
  const ans = firstSub - secondSub - thirdSub;
  return ans.toFixed(1);
};

type Props = {
    humidity: number;
    temp: number;
};

const HumidityDew = ({ humidity, temp }: Props) => {
  const dewPoint = calculateDewPoint(temp, humidity);
  return (
    <div className="wcard__stat">
      <div className="wcard__text">
        Humidity: {humidity}%
      </div>
      <div className="wcard__text">
        Dew point: {dewPoint}°C
      </div>
    </div>
  );
};

export default HumidityDew;
