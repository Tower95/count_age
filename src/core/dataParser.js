'use strict'

exports.parse = (strData) => {

  if (strData === undefined) {
    return {};
  }

  // separate keys from values
  const regex = /(\w+)=(\w+)/g;
  const paresClaveValor = [...strData.matchAll(regex)];

  // convert to array of objects
  const data = []
  paresClaveValor.forEach(pair => {
    const key = pair[1]
    const value = pair[2]
    let obj = { [key]: value }
    data.push(obj)
  });

  // iterate over array of objects and create a new object
  const resultado = {};
  for (let i = 0; i < data.length; i += 2) {
    const key = data[i]?.key;
    const age = data[i + 1]?.age;

    if (key === undefined || age === undefined) {
      continue;
    }

    resultado[key] = Number(age);
  }

  return resultado;
}
