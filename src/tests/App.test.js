import React from 'react';
import { render, screen } from '@testing-library/react';
import StarWarsProvider from '../context/StarWarsProvider';
import App from '../App';
import userEvent from '@testing-library/user-event'
import testData from '../../cypress/mocks/testData';

it('I am your test', () => {
  render(<App />);
  
  
  const headerElement = screen.getByText(/Planet Search/i);
  const nameFilter = screen.getByTestId('name-filter');
  const columFilter = screen.getByTestId('column-filter');
  const compareFilter = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
  const buttonRemoveFilters = screen.getByTestId('button-remove-filters');
  const columnSort = screen.getByTestId('column-sort');
  const columnSortInputAsc = screen.getByTestId('column-sort-input-asc');
  const columnSortInputDesc = screen.getByTestId('column-sort-input-desc');
  const columnSortButton = screen.getByTestId('column-sort-button');
  const table1 = screen.getByTestId('table-1');
  
  
  
  expect(headerElement).toBeInTheDocument();
  expect(nameFilter).toBeInTheDocument();
  expect(columFilter).toBeInTheDocument();
  expect(compareFilter).toBeInTheDocument();
  expect(valueFilter).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();
  expect(buttonRemoveFilters).toBeInTheDocument();
  expect(columnSort).toBeInTheDocument();
  expect(columnSortInputAsc).toBeInTheDocument();
  expect(columnSortInputDesc).toBeInTheDocument();
  expect(columnSortButton).toBeInTheDocument();
  expect(table1).toBeInTheDocument();

  
  

});


it('I am your test 2', async () => {
  render(<App />);

  
  userEvent.click(screen.getByTestId('button-filter'));
  await screen.findByTestId('filter');
  const btnExcluir = screen.getByRole('button', {
    name: /excluir/i
  })
  expect(btnExcluir).toBeInTheDocument();

  userEvent.click(btnExcluir);

  

});