import * as React from 'react';

type Props = {
    visibility: number;
};

const Visibility = ({ visibility }: Props) => {
  const kilometers = (visibility / 1000).toFixed(1);
  return (
    <div className="wcard__stat">
      <div className="wcard__text">
        Visibility: {kilometers}km
      </div>
    </div>
  );
};

export default Visibility;
