import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { setFilterByName } = useContext(StarWarsContext);
  const [filterName, setfilterName] = useState('');

  useEffect(() => {
    setFilterByName({ name: filterName });
  }, [setFilterByName, filterName]);

  return (
    <form>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          value={ filterName }
          id="name-filter"
          placeholder="Planet Name"
          onChange={ ({ target: { value } }) => setfilterName(value) }
        />
      </label>
    </form>
  );
}

export default NameFilter;
