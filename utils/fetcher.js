import fetch from 'isomorphic-unfetch';
import { getDeviceToken } from '../config/device-token';
import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../config/api';
const options = {
  headers: {
    [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
    [HEADER_DEVICE_TOKEN]: getDeviceToken(),
  },
};
function fetcher(url) {
  console.log(url, 'URL FETCHER');
  return fetch(url, options).then((r) => r.json());
}

export default fetcher;
