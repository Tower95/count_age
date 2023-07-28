'use strict'
const { describe, expect, test } = require('@jest/globals');
const parseData = require('./dataParser');

describe('Test suite for dataParser', () => {

  test('should return an array with 2 elements', () => {
    const data = 'key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47';
    const resultado = parseData.parse(data);

    expect(resultado).toEqual({
      IAfpK: 58,
      WNVdi: 64,
      jp9zt: 47
    });
  });

  test('pass a undefined value', () => {
    const data = undefined;
    const resultado = parseData.parse(data);

    expect(resultado).toEqual({});

  });

  test('pass a empty string', () => {
    const data = '';
    const resultado = parseData.parse(data);

    expect(resultado).toEqual({});

  });

  test('pass a string with no data', () => {
    const data = 'key=, age=, key=, age=';
    const resultado = parseData.parse(data);

    expect(resultado).toEqual({});

  });

  test('pass a string not valid', () => {
    const data = 'Hello World';
    const resultado = parseData.parse(data);

    expect(resultado).toEqual({});

  })

  test('pass a string incomplete some have not value', () => {
    const data = 'key=IAfpK, age=58, key=WNVdi, age=64, key=, age=';

    const resultado = parseData.parse(data);

    expect(resultado).toEqual({
      IAfpK: 58,
      WNVdi: 64
    });
  })

  test('pass a string incomplete some have not key', () => {
    const data = 'key=IAfpK, age=58, key=WNVdi, age=64, =, age=';

    const resultado = parseData.parse(data);

    expect(resultado).toEqual({
      IAfpK: 58,
      WNVdi: 64
    });
  })

  test('pass a string incomplete some have not age', () => {
    const data = 'key=IAfpK, age=58, key=WNVdi';

    const resultado = parseData.parse(data);

    expect(resultado).toEqual({
      IAfpK: 58
    });
  })

  test('pass a string incomplete some have not key ', () => {
    const data = 'key=IAfpK, age=58, age=64,';

    const resultado = parseData.parse(data);

    expect(resultado).toEqual({
      IAfpK: 58
    });
  })
});