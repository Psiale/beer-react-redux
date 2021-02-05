import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
    div,
  );
});

it('renders inner text properly', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(getByTestId('link-test')).toContainHTML('Back to Home ');
});
