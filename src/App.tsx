import React from 'react';
import './App.scss';
import Gear from 'components/Gear';
import CardList from 'components/CardList';

const App = () => (
  <div className="weather">
    <div className="weather__content">
      <Gear />
      <CardList />
    </div>
  </div>
);

export default App;
