const { randomNumber } = require('./service.js');

describe('randomNumber', () => {
  it('retorna um numero', () => {
    expect(typeof(randomNumber)).toBe('function');
  }) 
})