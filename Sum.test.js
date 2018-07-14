const sum = require('./sum');
const difference = require('./Difference');
const scrabble = require('./ScrabbleWordScore');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract 7 - 4 to equal 3', () => {
    expect(difference(7, 4)).toBe(3);
  });

  test('scrabble word score of panther to equal 12', () => {
    expect(scrabble('panther')).toBe(12);
  });

  test('scrabble word score of antidisestablishmentarianism to equal 38', () => {
    expect(scrabble('antidisestablishmentarianism')).toBe(38);
  });

  test('scrabble word score of Dell to equal 5', () => {
    expect(scrabble('dell')).toBe(5);
  });