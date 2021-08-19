import * as React from 'react';
import './index.scss';
import useWeather from '../../hooks/useWeather';
import CardSwitch from './CardSwitch';

type Props = {
    city: string;
};

const Index = ({ city }: Props) => {
  const { isLoading, error, data } = useWeather(city);
  return (
    <div className="wcard">
      <CardSwitch isLoading={isLoading} data={data} error={error} city={city} />
    </div>
  );
};

export default Index;
