const { encode, decode } = require ('./encodeDecode');

describe ('encode and decode are functions: ', () => {
  it ('Returns true if they exist', () => {
    expect(typeof encode === 'function').toEqual(true);
    expect(typeof decode === 'function').toEqual(true);
  })
})

describe ('Encode: ', () => {
  it ('Turns a, e, i, o, u into 1, 2, 3, 4, 5', () => {
    expect(encode('a')).toEqual('1');
    expect(encode('e')).toEqual('2');
    expect(encode('i')).toEqual('3');
    expect(encode('o')).toEqual('4');
    expect(encode('u')).toEqual('5');
  })
})

describe ('Decode: ', () => {
  it ('Turns 1, 2, 3, 4, 5 into a, e, i, o, u', () => {
    expect(decode('1')).toEqual('a');
    expect(decode('2')).toEqual('e');
    expect(decode('3')).toEqual('i');
    expect(decode('4')).toEqual('o');
    expect(decode('5')).toEqual('u');
  })
})

describe ('Encode: ', () => {
  it ("Don't turn a, b, i, o, u into 1, 2, 3, 4, 5", () => {
    expect(encode('a')).toEqual('1');
    expect(encode('b')).not.toEqual('2');
    expect(encode('i')).toEqual('3');
    expect(encode('o')).toEqual('4');
    expect(encode('u')).toEqual('5');
  })
})

describe ('Decode: ', () => {
  it ('returns the same string size from the input', () => {
    expect(decode('h2ll4').length).toEqual(5);
  })
})