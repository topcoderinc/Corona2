/**
 * class: Geocoder
 * Geocode data
 */

import {Component} from 'react'

class Geocoder extends Component {

  /**
   * resolve coordinates
   * @param activities the Topcoder activities
   * @param cities the list of cities with coordinates
   * @return activities with lat, lng coordinates set
   */
  static geocode = function(activities, cities) {

    activities.forEach(function(row) {
      cities.forEach(function(city) {
        if (city.name === row['submitter.city']) {
          row.mag = 5;
          row.lat = parseFloat(city.latitude);
          row.lng = parseFloat(city.longitude);
        }
      });
    });

    return activities;
  }
}

export default Geocoder;
