const myFizzBuzz = require('./myFizzBuzz.js');

describe('função myFizzBuzz: ', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(3)).toEqual('fizz');
    expect(myFizzBuzz(5)).toEqual('buzz');
    expect(myFizzBuzz(2)).toEqual(2);
    expect(myFizzBuzz('2')).toEqual(false);
  })
});