'use strict';
const { describe, expect, test } = require('@jest/globals');
const logic = require('./logic');
describe('Test suite for logic', () => {

  test('should return an array with 2 elements', () => {
    const data = { IAfpK: 32, WNVdi: 64, jp9zt: 32 };
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([
      'IAfpK',
      'jp9zt'
    ]);
  });

  test('pass a undefined value', () => {
    const data = undefined;
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([]);
  })

  test('pass a null value', () => {
    const data = null;
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([]);
  })

  test('pass a empty object', () => {
    const data = {};
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([]);
  })

  test('pass a object with age as string', () => {
    const data = { IAfpK: '32', WNVdi: '64', jp9zt: '32' };
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([]);
  })

  test('pass a object with age as string and number', () => {
    const data = { IAfpK: 32, WNVdi: 64, jp9zt: '32' };
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([
      'IAfpK',
    ]);
  })

  test('pass a object with age as object', () => {
    const data = {
      IAfpK: {}, asd: {}
    };
    const resultado = logic.getKeysfromAges(data);
    expect(resultado).toEqual([]);
  })

});