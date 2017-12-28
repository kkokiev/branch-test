import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Shell from './shell';
import MainPage from './main-page';
import Article from './article';

const App = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Shell}>
      <IndexRoute component={MainPage} />
      <Route path="/:id" component={Article} />
    </Route>
  </Router>;

export default App;
