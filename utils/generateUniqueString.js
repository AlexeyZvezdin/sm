export function generateUniqueString(length) {
  let result = '';
  let randomASCII;
  for (let i = 0; i < length; i++) {
    randomASCII = Math.floor(Math.random() * 25 + 97);
    result += String.fromCharCode(randomASCII);
  }
  return result;
}
