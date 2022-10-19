import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DisplayFilters() {
  const { filters, handleRemoveFilter } = useContext(StarWarsContext);
  return (
    <ul>
      {filters.map((filter, index) => {
        const { column, comparison, value } = filter;
        const string = `${column} ${comparison} ${value}`;
        return (
          <li key={ index } data-testid="filter">
            <span>{ string }</span>
            <button
              type="button"
              onClick={ () => handleRemoveFilter(filter) }
            >
              Excluir

            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayFilters;
