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

it('I am your test 3', async () => {
  global.fetch = jest.fn(async () => ({
    json: async () => testData
  }));
  render(<App />);

 
  // const Tatooine = await screen.findByText(/Tatooine/i);
  // expect(Tatooine).toBeInTheDocument();
  const planetaTatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});
    expect(planetaTatooine).toBeInTheDocument();

  const nameFilter = screen.getByTestId('name-filter');
  const columFilter = screen.getByTestId('column-filter');
  const compareFilter = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
  const columnSort = screen.getByTestId('column-sort');
  const columnSortInputAsc = screen.getByTestId('column-sort-input-asc');
  const columnSortInputDesc = screen.getByTestId('column-sort-input-desc');
  const columnSortButton = screen.getByTestId('column-sort-button');

  
  userEvent.type(nameFilter, 'ok');
  userEvent.click(buttonFilter)
  userEvent.selectOptions(columFilter, 'orbital_period');
  userEvent.type(valueFilter, '200');
  userEvent.click(buttonFilter);
  userEvent.click(columnSortInputAsc)
  userEvent.click(columnSortInputDesc)
  userEvent.click(columnSortButton)
  
  userEvent.selectOptions(columnSort, 'orbital_period');
  userEvent.selectOptions(compareFilter, 'igual a');
  userEvent.click(buttonFilter)
  userEvent.click(buttonFilter)
  // const um = screen.getByText('population maior que 0')
  // const dois = screen.getByText('orbital_period maior que 0200')
  // const tres = screen.getByText('diameter igual a 0200')
  // expect(um).toBeInTheDocument();
  // expect(dois).toBeInTheDocument();
  // expect(tres).toBeInTheDocument();
  
  // await screen.findByTestId('filter');
  const btnExcluir = screen.getAllByRole('button', {
    name: /excluir/i
  })


  btnExcluir.forEach((e) => {
    userEvent.click(e)
  })

  
  userEvent.selectOptions(columFilter, 'population');
  userEvent.selectOptions(compareFilter, 'maior que');
  userEvent.type(valueFilter, '10');
  userEvent.click(buttonFilter);

  userEvent.selectOptions(columFilter, 'diameter');
  userEvent.selectOptions(compareFilter, 'maior que');
  userEvent.type(valueFilter, '2');
  userEvent.click(buttonFilter);

  const buttonRemoveFilters = screen.getByTestId('button-remove-filters');

  userEvent.click(buttonRemoveFilters);
  // expect(StarWarsProvider()).toEqual('function');
});