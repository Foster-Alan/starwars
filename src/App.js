import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
// import Header from './components/Header';
import Table from './components/Table';
// import PlanetSeatch from './components/PlanetSearch';
// import './test.css';
// import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <main className="main">
        <Table />
      </main>

    </StarWarsProvider>
  );
}

export default App;
