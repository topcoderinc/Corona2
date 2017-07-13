/**
 * class: App
 * Main App
 */
import React, { Component } from 'react';
import './App.css';
import Loader from './Loader';
import Planetary from './Planetary';
import Wordcloud from './Wordcloud';
import Geocoder from './Geocoder';
import { Tab, Tabs } from 'react-bootstrap';
import d3 from './lib/d3';

class App extends Component {

  componentDidMount() {

    const self = this;

    /**
      Load topcoder activity data and set up the controls.
      The data consists of an array of objects in the following format:
      {
        "challenge.challenge_category_name" : "Application Front-End Design",
        "challenge.challenge_name" : "Website UI Makeover",
        "submitter.city" : "Colchester",
        "submitter.handle" : "AdamSelene",
        "submitter_country.country_name" : "United States",
        "challenge.status_desc" : "Completed",
        "challenge.status_id" : 7
      }
    */

    if (d3 !== undefined) {
      d3.json('https://api.topcoder.com/v4/looks/343/run/json/', function(err, activities) {

        if (err) {
          alert("Problem loading the data.");
          return;
        }

        /**
         * loads the cities information (city name and coordinates)
         */
        d3.tsv('cities15000.txt', function(err, cities) {
          if (err) {
            alert("Problem loading the quake data.");
            return;
          }

          // resolve coordinates
          activities = Geocoder.geocode(activities, cities);

          // set initial date and increment time to give a information in timeline fashion
          var rowTime = new Date('2017-01-01').getTime();
          activities.forEach(function(row, rowIndex) {
            row.time = rowTime;
            rowTime = rowTime + 10000000;
          });

          self.setState({ activities: activities });

        });
      });
    }
  }

  render() {

    return (
      <div>
        { !this.state &&
        <Loader></Loader>
        }
        { this.state && this.state.activities &&
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Planetary"><Planetary activities={this.state.activities}></Planetary></Tab>
          <Tab eventKey={2} title="Wordcloud"><Wordcloud activities={this.state.activities}></Wordcloud></Tab>
        </Tabs>
        }
      </div>
    );
  }
}

export default App;
