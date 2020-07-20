import { getDeviceToken } from '../config/device-token';
import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../config/api';

function browserFetch(
  url,
  method = 'GET',
  body = '',
  deviceToken = false,
  bodyGet = '',
  authToken = ''
) {
  let options = {
    headers: {
      [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
      [HEADER_DEVICE_TOKEN]: deviceToken ? deviceToken : getDeviceToken(),
      [HEADER_AUTH_TOKEN]: authToken,
      'Content-type': 'application/json;charset=UTF-8',
    },
    method: method,
    body: body,
  };
  // console.log(url, ' url');
  return window
    .fetch(BASE_URL + url + bodyGet, options)
    .then((r) => r.json())
    .catch((err) => console.log(err, ' ERROR in window.fetch'));
}

// Должен принимать опции
/*
Вручную управляться токен, заголовки, тело, метод

*/

export default browserFetch;
