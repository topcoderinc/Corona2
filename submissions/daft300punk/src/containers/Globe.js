import React from 'react';
import { connect } from 'react-redux';
import Globe from '../components/Globe';
import PropTypes from 'prop-types';

/*
  See Globe component for details.
*/
const GlobeContainer = ({
  data,
  vizType,
  sizeOfPoint,
  isRequesting
}) => {
  return (

    /*
      Don't show the globe if the data is fetching.
    */
    isRequesting ? <div /> : (
      <Globe
        data={data}
        vizType={vizType}
        sizeOfPoint={sizeOfPoint}
      />
    )

  );
};

const mapStateToProps = (state) => ({
  data: state.globeData.data,
  vizType: state.globeData.vizType,
  sizeOfPoint: state.globeData.sizeOfPoint,
  isRequesting: state.globeData.isRequesting
});


GlobeContainer.propTypes = {
  data: PropTypes.array,
  vizType: PropTypes.string,
  sizeOfPoint: PropTypes.number,
  isRequesting: PropTypes.bool
};

export default connect(
  mapStateToProps
)(GlobeContainer);
