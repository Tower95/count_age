'use strict'

exports.getKeysfromAges = (data, age = 32) => {

  if (data === undefined || data === null) {
    return [];
  }

  const keys = [];

  // iterate over object and if age is 32 save the key
  for (const [key, value] of Object.entries(data)) {
    if (value === age) {
      keys.push(key);
    }
  }

  return keys;
}