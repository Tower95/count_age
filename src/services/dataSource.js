'use strict'
const logger = require('../utils/logs');
const axios = require('axios');

const url = 'https://coderbyte.com/api/challenges/json/age-counting';

exports.getAges = async () => {
  let data = undefined;

  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    logger.error(error);
  }

  return data
}
