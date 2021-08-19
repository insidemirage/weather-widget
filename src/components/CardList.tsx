import * as React from 'react';
import Card from './Card';

const cards = ['London', 'New York'];

const CardList = () => (
  <div className="weatherlist">
    {cards.map((v) => <Card city={v} />)}
  </div>
);

export default CardList;
