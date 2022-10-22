import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Header from './components/Header';
import Table from './components/Table';
import PlanetSeatch from './components/PlanetSearch';
import './test.css';

function App() {
  return (
    <StarWarsProvider>
      <section className="home">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <main className="main">
          <Header />
          <PlanetSeatch />
          <Table />
        </main>
      </section>
    </StarWarsProvider>
  );
}

export default App;
