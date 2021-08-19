import * as React from 'react';

type Props = {
    city: string;
    error: string;
};
const CardError = ({ city, error }: Props) => (
  <>
    <div className="wcard__title">{city}</div>
    <div className="wcard__error">
      {error}
    </div>
  </>
);

export default CardError;
