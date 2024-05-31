import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={"https://raaaaz123.github.io/pixa2.0"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

