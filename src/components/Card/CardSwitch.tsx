import * as React from 'react';
import { IWeatherData } from '../../types/apiTypes';
import Loader from '../Loader';
import CardContent from './CardContent';
import CardError from './CardError';

type Props = {
    isLoading: boolean;
    data: IWeatherData|null;
    city: string;
    error: string;
};

const CardSwitch = ({
  isLoading, data, city, error
}: Props) => {
  if (isLoading) {
    return <Loader description="City" />;
  }
  if (data) {
    return <CardContent data={data} />;
  }
  return <CardError city={city} error={error} />;
};

export default CardSwitch;
