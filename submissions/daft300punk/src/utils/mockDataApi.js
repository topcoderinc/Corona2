import { makeDummyDataFlat, makeDummyDataMagnitude } from './makeDummyData';

/*
  Filter data for each of the categories.
*/
const dataFlatAll = makeDummyDataFlat();
const dataFlatDesign = dataFlatAll.filter((data) => { if (data.type == 'des') return data; });
const dataFlatDevelopment = dataFlatAll.filter((data) => { if (data.type == 'dev') return data; });
const dataFlatDataScience = dataFlatAll.filter((data) => { if (data.type == 'dsc') return data; });

const dataMagnitude = makeDummyDataMagnitude();

/*
  Mock server returning data on the basis of selected category.
*/
export default function getDataApi(category, filter) {
  const helper = (category, filter, resolve, reject) => {
    if (category == 'all activity')
      return resolve(JSON.stringify(dataFlatAll));
    if (category == 'development')
    { return resolve(JSON.stringify(dataFlatDevelopment)); }
    if (category == 'data science')
      return resolve(JSON.stringify(dataFlatDataScience));
    if (category == 'design')
      return resolve(JSON.stringify(dataFlatDesign));
    if (category == 'top winners')
      return resolve(JSON.stringify(dataMagnitude));
    reject('error fetching data');
  };
  return new Promise(function (resolve, reject) {
    setTimeout(helper, 1000, category, filter, resolve, reject);
  });
}