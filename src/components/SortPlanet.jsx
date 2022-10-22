import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { INICIAL_COLUMN_OPTIONS } from '../helpers/inicialStates';


function SortPlanet() {
  const { handleSort } = useContext(StarWarsContext);
  const [sortColumn, setSortColumn] = useState('population');
  const [sortRadio, setSortRadio] = useState('ASC');

  const renderColumnOptions = () => (INICIAL_COLUMN_OPTIONS.map((option) => (
    <option
      value={ option }
      key={ option }
    >
      { option }
    </option>
  )));

  return (
    <form>
      <label htmlFor="column-sort">
        <select
          data-testid="column-sort"
          value={ sortColumn }
          name="column-sort"
          id="column-sort"
          onChange={ ({ target: { value } }) => setSortColumn(value) }
        >
          { renderColumnOptions() }
        </select>
      </label>
      <label
        htmlFor="column-sort-input-asc"
      >
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          id="column-sort-input-asc"
          name="column-sort-input"
          onChange={ ({ target: { value } }) => setSortRadio(value) }
        />
        ASC
      </label>
      <label
        htmlFor="column-sort-input-desc"

      >
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          id="column-sort-input-desc"
          name="column-sort-input"
          onChange={ ({ target: { value } }) => setSortRadio(value) }

        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleSort({
          column: sortColumn,
          sort: sortRadio,
        }) }

      >
        Sort Planets
      </button>
    </form>
  );
}

export default SortPlanet;
