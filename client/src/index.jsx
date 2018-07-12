import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';

import store        from './store';
import AppRouter    from './router';

import SocketManager from './models/socketManager';
const socketManager = new SocketManager();
socketManager.connect('http://localhost:3000');

import './index.css';

const appRoot = document.getElementById('app');

render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  appRoot
);
