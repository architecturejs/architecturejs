import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

export default class Landing extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <div className='Landing d-flex flex-column align-items-center justify-content-center'>
        <h1>Architecture JS</h1>
      </div>
    );
  }

}