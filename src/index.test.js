import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Wrapper from './index';

describe('Wrapper component', () => {

  test('renders without error', async () => {
    const component = render(<Wrapper />);
    expect(component.container).toBeInTheDocument();
  });

  test('It should contain titles', async () => {
    const component = render(<Wrapper />);
    expect(component.getByText('Error Type 1')).toBeInTheDocument();
    expect(component.getByText('Warning Type 2')).toBeInTheDocument();
    expect(component.getByText('Info Type 3')).toBeInTheDocument();
  });

});