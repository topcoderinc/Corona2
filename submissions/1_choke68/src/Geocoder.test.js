/**
 * class: Geocoder test
 * Test how to geocode data
 */

import Geocoder from './Geocoder';

describe('Geocoder functionality', () => {
  it('knows how to geocode and parse coordinates', () => {

    // input data
    var activities = 
    [ {"challenge.challenge_category_name":"Application Front-End Design","challenge.challenge_name":"$1750 Panel Configuration Storyboard - Round 2","submitter.city":"Hyderabad","submitter.handle":"Winner5","submitter_country.country_name":"India","challenge.status_desc":"Completed","challenge.status_id":7},
      {"challenge.challenge_category_name":"Application Front-End Design","challenge.challenge_name":"Hestia B2B Quote to Order Design Tournament","submitter.city":"Brisbane","submitter.handle":"djnapier","submitter_country.country_name":"Australia","challenge.status_desc":"Completed","challenge.status_id":7},
      {"challenge.challenge_category_name":"Application Front-End Design","challenge.challenge_name":"Event Schedule Rebranding Storyboard Design","submitter.city":"Unknown city -- void","submitter.handle":"Leeh","submitter_country.country_name":"Peru","challenge.status_desc":"Completed","challenge.status_id":7}
    ];
    var cities =
    [ {"name": "Hyderabad", "latitude": "17.38405", "longitude": "78.45636"},
      {"name": "Brisbane", "latitude": "-27.46794", "longitude": "153.02809"},
    ];

    // geocode
    var res = Geocoder.geocode(activities, cities);

    // verify result
    expect(res.length).toBe(3);
    expect(res[0].lat).toBe(17.38405);
    expect(res[0].lng).toBe(78.45636);
    expect(res[1].lat).toBe(-27.46794);
    expect(res[1].lng).toBe(153.02809);
    expect(res[2].lat).toBe(undefined);
    expect(res[2].lng).toBe(undefined);
  });
});
