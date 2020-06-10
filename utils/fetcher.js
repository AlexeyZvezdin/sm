import fetch from 'isomorphic-unfetch';
import { getDeviceToken } from '../config/device-token';
import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../config/api';
let options = {
  headers: {
    [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
    [HEADER_DEVICE_TOKEN]: getDeviceToken(),
    'Content-type': 'application/json;charset=UTF-8',
  },
};
function fetcher(url, otherOpts) {
  if (otherOpts) {
    options = { ...options, ...otherOpts };
  }
  // console.log(options, ' OPTIONS');
  // console.log(url, ' url');
  return fetch(url, options)
    .then((r) => r.json())
    .catch((err) => console.log(err, ' ERROR in FETHCER'));
}

export default fetcher;
