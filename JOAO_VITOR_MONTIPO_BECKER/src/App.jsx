import React from 'react';
import NaiveObserver from './ObserverPattern/NaiveObserver';
import ObserverPattern from './ObserverPattern/ObserverPattern';
import NaiveFactory from './FactoryMethod/NaiveFactory';
import FactoryMethod from './FactoryMethod/FactoryMethod';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <NaiveObserver />
      <ObserverPattern />
      <NaiveFactory />
      <FactoryMethod />
    </div>
  );
};

export default App;