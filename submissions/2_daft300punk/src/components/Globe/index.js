import React, { Component } from 'react';
import initGlobe from './libs/initGlobe';
import PropTypes from 'prop-types';

/*
  Renders the central globe. @data is array of data points that
  needs to be rendered on the globe. @sizeOfPoint is the size of
  circle/square base of data points. You can change it to see 
  how it affects the size of rendered data points. The default 
  value is 2. @vizType is the type of visualiztion - flat or magnitude.
*/
class Globe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      data,
      sizeOfPoint,
      vizType
    } = this.props;

    initGlobe(data, sizeOfPoint, vizType);

    window.addEventListener('resize', () => {
      document.getElementsByTagName('canvas')[0].remove();
      initGlobe(data, sizeOfPoint, vizType);
    });
  }

  render() {
    return (
      <div id="container" />
    );
  }
}

Globe.propTypes = {
  data: PropTypes.array,
  sizeOfPoint: PropTypes.number,
  vizType: PropTypes.string
};

export default Globe;
