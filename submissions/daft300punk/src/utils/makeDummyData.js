const types = ['dev', 'dsc', 'des'];

/*
  Generates 1000 random data points for the Globe to render.
  The generated points don't have magnitude key. Thus they
  will render as flat circular points on the Globe.
*/
export const makeDummyDataFlat = () => {
  let dataFlat = [];
  for (let i = 0; i < 1000; i++) {
    let multiplier1, multiplier2;

    if (Math.random() < .5) multiplier1 = 1;
    else multiplier1 = -1;

    if (Math.random() < .5) multiplier2 = 1;
    else multiplier2 = -1;

    const lat = Math.random() * 90 * multiplier1;
    const long = Math.random() * 180 * multiplier2;
    const type = types[Math.floor(Math.random() * 3)];

    /*
      Note the format of data. The server should return data
      in this format. The generated points don't have magnitude key. 
      Thus they will render as flat circular points on the Globe.
    */
    const data = {
      lat: lat,
      long: long,
      type: type,
      text: ''
    };
    dataFlat.push(data);
  }
  return dataFlat;
};

/*
  Generates 500 random data points with magnitude. These 
  will be renderd on the Globe as towers with height of tower
  depending on the magnitude field.
*/
export const makeDummyDataMagnitude = () => {
  let dataMagnitude = [];

  for (let i = 0; i < 500; i++) {
    let multiplier1, multiplier2;

    if (Math.random() < .5) multiplier1 = 1;
    else multiplier1 = -1;

    if (Math.random() < .5) multiplier2 = 1;
    else multiplier2 = -1;

    const lat = Math.random() * 90 * multiplier1;
    const long = Math.random() * 180 * multiplier2;
    const type = types[Math.floor(Math.random() * 3)];

    /*
      Note the field magnitude. Server must send data in this
      format.
    */
    const data = {
      lat: lat,
      long: long,
      type: type,
      text: '',
      magnitude: Math.random()
    };
    dataMagnitude.push(data);
  }

  return dataMagnitude;
};
