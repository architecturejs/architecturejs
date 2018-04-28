import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import main CSS styles
import 'styles';

import Landing from './pages/Landing/Landing';

class MainComponent extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <div>
            <Route exact path="/" component={Landing} />
          </div>
        </main>
      </Router>
    );
  }
  
}

ReactDom.render(<MainComponent />, document.querySelector('#app'));