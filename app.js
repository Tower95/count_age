'use strict'
const data_source = require('./src/services/dataSource');
const parseData = require('./src/core/dataParser');
const logic = require('./src/core/logic');
const files = require('./src/utils/files');
const logger = require('./src/utils/logs');

process.on('uncaughtException', logger.fatal_error);
process.on('unhandledRejection', logger.fatal_error);

async function main() {

  // get data from url
  let ages = await data_source.getAges();

  // parse data
  const resultado = parseData.parse(ages.data);

  // get keys from ages
  const keys = logic.getKeysfromAges(resultado);

  // write a file output.txt with the keys
  files.writeOutputFile(keys.join('\n'), 'output.txt');

  // hash the output file with sha1 on ./output.txt and print the hash
  const hash = files.getHashFile('output.txt');
  console.log(hash);

}

main();
