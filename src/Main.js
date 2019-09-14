// @flow

import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// import main CSS styles
import 'styles';

import Landing from './pages/Landing/Landing';

const Main = () => (
  <Router>
    <main>
      <div>
        <Route exact path="/" component={Landing} />
      </div>
    </main>
  </Router>
);

const app = document.querySelector('#app');

if (app) {
  ReactDom.render(<Main />, app);
}
