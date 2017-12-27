import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Landing extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <header className="masthead">
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading" className="text-shadow">Architecture JS</h1>
          </div>
        </div>
      </header>
    );
  }

}