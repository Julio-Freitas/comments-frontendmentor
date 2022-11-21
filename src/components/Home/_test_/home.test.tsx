import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '..'
describe('Teeste', () => {
  it('it is test', () => {
    render(<Home />)
    expect(screen.getByText(/Homeeee/)).toBeInTheDocument()
  });
});
