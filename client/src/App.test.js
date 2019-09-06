import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Navbar contains text', () => {
  const { getByText } = render(<App />);
  getByText(/World Cup/i);
});

test('is there a something dark', () => {
  const { getByTestId  } = render(<App />);
  getByTestId (/dark/i);
});


