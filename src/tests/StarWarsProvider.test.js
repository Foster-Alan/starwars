import React from 'react';
import { findByText, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('test', () => {
  it('refazendo test pra ver se vai', async () => {
    render(<App />)


  const columFilter = screen.getByTestId('column-filter');
  const compareFilter = screen.getByTestId('comparison-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
    

    const planetaTatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});
    expect(planetaTatooine).toBeInTheDocument();

    userEvent.selectOptions(columFilter, 'orbital_period');
    userEvent.selectOptions(compareFilter, 'maior que');
    userEvent.type(valueFilter, '100');
    userEvent.click(buttonFilter);

    userEvent.selectOptions(columFilter, 'population');
    userEvent.selectOptions(compareFilter, 'menor que');
    userEvent.type(valueFilter, '100');
    userEvent.click(buttonFilter);

    userEvent.selectOptions(columFilter, 'diameter');
    userEvent.selectOptions(compareFilter, 'igual a');
    userEvent.type(valueFilter, '100');
    userEvent.click(buttonFilter);
  }, 25000)


  it('tentando o 100%', async () => {
    render(<App />)

    const tatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});
    expect(tatooine).toBeInTheDocument();
   
    const columnSort = screen.getByTestId('column-sort');
    const columnSortInputAsc = screen.getByTestId('column-sort-input-asc');
    const columnSortInputDesc = screen.getByTestId('column-sort-input-desc');
    const columnSortButton = screen.getByTestId('column-sort-button');
      userEvent.selectOptions(columnSort, 'population');
      userEvent.click(columnSortInputAsc);
      userEvent.click(columnSortButton)

      userEvent.selectOptions(columnSort, 'population');
      userEvent.click(columnSortInputDesc);
      userEvent.click(columnSortButton)

      
  },)


})