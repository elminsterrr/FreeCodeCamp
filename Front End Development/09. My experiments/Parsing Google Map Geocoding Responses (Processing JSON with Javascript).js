// https://developers.google.com/maps/documentation/geocoding/web-service-best-practices#ParsingJSON
// Processing JSON with Javascript
//
// JSON (Javascript Object Notation) has an obvious advantage over XML in that the response is lightweight. Parsing such a result is trivial in JavaScript as the format is already a valid Javascript object. For example, to extract the value of the 'formatted_address' keys within a JSON result object, simply access them using the following code:
//
// for (i = 0; i < myJSONResult.results.length; i++) {
//   myAddress[i] = myJSONResult.results[i].formatted_address;
// }

import axios from 'axios';

export const FETCH_MAP_STARTED = 'FETCH_MAP_STARTED';
export const FETCH_MAP_SUCCESS = 'FETCH_MAP_SUCCESS';
export const FETCH_MAP_ERROR = 'FETCH_MAP_ERROR';

export const FETCH_SHOPS_STARTED = 'FETCH_SHOPS_STARTED';
export const FETCH_SHOPS_SUCCESS = 'FETCH_SHOPS_SUCCESS';
export const FETCH_SHOPS_ERROR = 'FETCH_SHOPS_ERROR';

export const SELECTED_SHOP = 'SELECTED_SHOP';

const GOOGLE_API_KEY = 'AIzaSyDNMmI2f7qIcBnKgV1dYXmi995BY_8zoJM';
const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const SHOPS_LIST_SOURCE_URL = 'https://gist.githubusercontent.com/kubalasecki/0d3b3b1546e2f1d6b58ed533425dd246/raw/0ac4b8b3fc492694b4a98a35c33dfb973c428854/sample.json';

export function fetchMap() {
  return (dispatch) => {
    dispatch({ type: FETCH_MAP_STARTED });
    axios.get(GOOGLE_API_URL, {
      params: {
        latlng: '50.77141, 16.28432',
        key: GOOGLE_API_KEY,
      },
    }).then((response) => {
      console.log('??', response.data);
      response.data.results.map(item => console.log(item.formatted_address));
      dispatch({ type: FETCH_MAP_SUCCESS, payload: response });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_MAP_ERROR, payload: error });
    });
  };
}

export function fetchShops() {
  return (dispatch) => {
    dispatch({ type: FETCH_SHOPS_STARTED });
    axios.get(SHOPS_LIST_SOURCE_URL).then((response) => {
      dispatch({ type: FETCH_SHOPS_SUCCESS, payload: response });
      dispatch(fetchMap()); // ?????????????????????????????????????????????? console.log
    }).catch((error) => {
      dispatch({ type: FETCH_SHOPS_ERROR, payload: error });
    });
  };
}

export function selectShop(shop) {
  return (dispatch) => {
    dispatch({ type: SELECTED_SHOP, payload: shop });
  };
}
