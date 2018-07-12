import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App  from '../components/App';
import Game from '../components/Game';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ App } />
      <Route path="/play" exact component={ Game } />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
