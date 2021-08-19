import * as React from 'react';
import './Loader.scss';

type Props = {
    description: string;
}
const Loader = ({ description }:Props) => (
  <div className="weather-loader">
    Loading {description}
  </div>
);

export default Loader;
