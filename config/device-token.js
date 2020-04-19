import { generateUniqueString } from '../utils/generateUniqueString';

export function getDeviceToken() {
  let deviceToken = '';
  if (deviceToken) {
    return deviceToken;
  } else {
    deviceToken = generateUniqueString(16);
    return deviceToken;
  }
}
