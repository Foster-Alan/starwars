import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import sortByPopulationASC from '../helpers/sortServices';
import {
  INICIAL_COLUMN_OPTIONS,
  INICIAL_STATE_FILTER_BY_NAME,
  INICIAL_STATE_FILTER_BY_NUMBER,
  INICIAL_STATE_ORDER,
} from '../helpers/inicialStates';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);
  const [filterByName, setFilterByName] = useState(INICIAL_STATE_FILTER_BY_NAME);
  const [filterByNumber, setFilterByNumber] = useState(INICIAL_STATE_FILTER_BY_NUMBER);
  const [columnOption, setColumnOption] = useState(INICIAL_COLUMN_OPTIONS);
  const [order, setOrder] = useState(INICIAL_STATE_ORDER);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then(({ results }) => {
        results.map((planet) => delete planet.residents);
        setData(results);
        setDataFilter(results);
        setLoading(false);
      });
  }, []);

  const applyFilterOnData = (startData, array) => array.reduce((acc, curr) => {
    const newAcc = acc.filter((planet) => {
      if (curr.comparison === 'maior que') {
        return Number(planet[curr.column]) > Number(curr.value);
      } if (curr.comparison === 'menor que') {
        return Number(planet[curr.column]) < Number(curr.value);
      }
      return Number(planet[curr.column]) === Number(curr.value);
    });
    return newAcc;
  }, startData);

  useEffect(() => {
    const arrayPlanetsFilter = data
      .filter(({ name }) => name.toLowerCase().includes(filterByName.name.toLowerCase()))
      .sort(sortByPopulationASC);
    setDataFilter(arrayPlanetsFilter);
  }, [filterByName, data, setDataFilter]);

  const handleButtonFilter = (object, setFilterColumn) => {
    const arrayFilter = [...filters, object];
    const arrayPlanetsFilter = applyFilterOnData(dataFilter, arrayFilter);
    const columnOptionFilter = arrayFilter.reduce((acc, curr) => {
      const newAcc = acc.filter((option) => option !== curr.column);
      return newAcc;
    }, columnOption);

    setFilterByNumber(object);
    setColumnOption(columnOptionFilter);
    setFilters(arrayFilter);
    setDataFilter(arrayPlanetsFilter);
    setFilterColumn(columnOptionFilter[0]);
  };

  const handleRemoveFilter = (option) => {
    const filtersChange = filters.filter((filter) => filter !== option);
    setFilters(filtersChange);
    setColumnOption([...columnOption, option.column]);

    const dataInput = data
      .filter(({ name }) => name.toLowerCase().includes(filterByName.name.toLowerCase()))
      .sort(sortByPopulationASC);
    const updateDataFilter = applyFilterOnData(dataInput, filtersChange);
    setDataFilter(updateDataFilter);
  };

  const handleRemoveAllFilters = () => {
    setFilters([]);
    setColumnOption(INICIAL_COLUMN_OPTIONS);

    const dataInput = data
      .filter(({ name }) => name.toLowerCase().includes(filterByName.name.toLowerCase()))
      .sort(sortByPopulationASC);
    const updateDataFilter = applyFilterOnData(dataInput, []);
    setDataFilter(updateDataFilter);
  };

  const splitDataWithUnknown = (column) => [...dataFilter].reduce((acc, curr) => {
    if (curr[column] === 'unknown') {
      acc.arrayString.push(curr);
      return acc;
    }
    acc.arrayNumber.push(curr);
    return acc;
  }, {
    arrayNumber: [],
    arrayString: [],
  });

  const orderDataFilterBySort = (arrayString, arrayNumber, { column, sort }) => {
    switch (sort) {
    case 'ASC':
      return [
        ...arrayNumber.sort((a, b) => a[column] - b[column]),
        ...arrayString,
      ];
    default:
      return [
        ...arrayNumber.sort((a, b) => b[column] - a[column]),
        ...arrayString,
      ];
    }
  };

  const handleSort = (object) => {
    setOrder(object);
    const { column } = object;
    const { arrayString, arrayNumber } = splitDataWithUnknown(column);
    const sortedArrayData = orderDataFilterBySort(arrayString, arrayNumber, object);
    setDataFilter(sortedArrayData);
  };

  const contextValue = useMemo(() => ({
    columnOption,
    dataFilter,
    filterByName,
    filterByNumber,
    filters,
    loading,
    order,
    handleButtonFilter,
    handleRemoveFilter,
    handleRemoveAllFilters,
    handleSort,
    setFilterByName,
  }
  ), [columnOption, dataFilter, filterByName,
    filterByNumber, filters, handleButtonFilter,
    handleRemoveAllFilters, handleRemoveFilter, handleSort, loading, order]);
  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
