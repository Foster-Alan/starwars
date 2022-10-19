import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumerFilter() {
  const {
    handleButtonFilter,
    columnOption,
    handleRemoveAllFilters,
  } = useContext(StarWarsContext);

  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [filterNumber, setFilterNumber] = useState(0);

  const renderColumnOptions = () => (columnOption.map((option) => (
    <option
      value={ option }
      key={ option }
    >
      { option }
    </option>
  )));

  return (
    <form>
      {columnOption.length >= 1 ? (
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            value={ filterColumn }
            name="column-filter"
            id="column-filter"
            onChange={ ({ target: { value } }) => setFilterColumn(value) }
          >
            { renderColumnOptions() }
          </select>
        </label>
      ) : (
        <div>Maximum Filters</div>
      )}

      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          value={ filterComparison }
          name="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target: { value } }) => setFilterComparison(value) }

        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          value={ filterNumber }
          id="value-filter"
          placeholder="Number"
          onChange={ ({ target: { value } }) => setFilterNumber(value) }

        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        disabled={ columnOption.length === 0 }
        onClick={ () => {
          handleButtonFilter({
            column: filterColumn,
            comparison: filterComparison,
            value: filterNumber,
          }, setFilterColumn);
        } }

      >
        Filter
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleRemoveAllFilters }

      >
        Remove Filters
      </button>
    </form>
  );
}

export default NumerFilter;
