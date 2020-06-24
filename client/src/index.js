import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './assets/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
