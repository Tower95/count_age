'use strict'
const { describe, expect, test, afterAll } = require('@jest/globals');
const fs = require('fs');
const files = require('./files');

describe('Test suite for files', () => {

  test('should create a file', () => {
    const data = 'Hello World';
    const filename = 'test.txt';
    files.writeOutputFile(data, filename);
    const resultado = files.getHashFile(filename);
    expect(resultado).toEqual('0a4d55a8d778e5022fab701977c5d840bbc486d0');
  });

  afterAll(() => {
    const filename = 'test.txt';
    fs.unlinkSync(filename);
  });

});