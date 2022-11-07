import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../styles/Table.css';

function Table() {
  const { dataFilter } = useContext(StarWarsContext);

  const createLink = (linkList, string) => (linkList.map((link, index) => (
    <a target="_blank" rel="noreferrer" href={ link } key={ `${string}-${index}` }>
      {`${link.split('/')[5]}º`}
    </a>
  )));

  return (
    <section className="table-conteiner">

      <table>
        <thead data-testid="table-1">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Diameter</th>
            <th scope="col">Climate</th>
            <th scope="col">Gravity</th>
            <th scope="col">Terrain</th>
            <th scope="col">Surface Water</th>
            <th scope="col">Population</th>
            <th scope="col">Films</th>
            <th scope="col">Created</th>
            <th scope="col">Edited</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {dataFilter.map((planet) => (
            <tr data-testid="table-2" key={ planet.name }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ createLink(planet.films, 'film') }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td><a href={ planet.url }>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </section>
  );
}

export default Table;
