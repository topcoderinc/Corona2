/**
 * class: Loader
 * Shows a loading spin
 */
import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <h1>Topcoder Activity</h1>
        <p>Loading, please wait.</p>
        <div className="Loader"></div>
      </div>
    );
  }
}

export default Loader;
