import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the title correctly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const titleElement = screen.getByText(/🚀 Rick and Morty - Fan Service Beta Version 1.1.0/i);
    expect(titleElement).toBeInTheDocument();
  });
});
