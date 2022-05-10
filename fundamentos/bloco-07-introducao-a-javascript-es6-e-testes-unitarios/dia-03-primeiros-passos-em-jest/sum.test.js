const sum = require('./sum.js');

describe ('Função sum: ', () => {
  it ('Soma 4 e 5 e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it ('Soma 0 e 0 e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it ('Lança erro quando revebe 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  })
})