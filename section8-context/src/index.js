import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


// Step2 Wrap App with Context Provider

root.render(
  <Provider>
    <App />
  </Provider>
);
