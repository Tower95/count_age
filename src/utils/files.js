'use strict'
const fs = require('fs');
const logger = require('../utils/logs');
const crypto = require('crypto');

exports.writeOutputFile = (content, nameFile) => {
  try {
    fs.writeFileSync(nameFile, content);
  } catch (error) {
    logger.error(error);
  }
}

exports.getHashFile = (nameFile) => {
  const hash = crypto.createHash('sha1');
  const input = fs.readFileSync(nameFile);
  hash.update(input);
  return hash.digest('hex');
}