import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Header from './components/Header';
import Table from './components/Table';
import PlanetSeatch from './components/PlanetSearch';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <Header />
        <PlanetSeatch />
        <Table />
      </main>

    </StarWarsProvider>
  );
}

export default App;
