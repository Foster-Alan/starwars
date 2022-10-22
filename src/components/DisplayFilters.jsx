import React, { useContext } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import StarWarsContext from '../context/StarWarsContext';

function DisplayFilters() {
  const { filters, handleRemoveFilter } = useContext(StarWarsContext);
  return (
    <div>
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
                <RiDeleteBin5Line size={ 20 } color="rgb(249 210 0)" />

              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayFilters;
