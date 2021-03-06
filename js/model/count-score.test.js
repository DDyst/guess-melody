import assert from 'assert';
import {countScore} from './count-score.js';

describe(`Scoring`, () => {
  it(`should return -1 if there are lesser answers than levels`, () => {
    assert.equal(countScore([1, 2, 1], [{}, {}, {}, {}]), -1);
  });

  it(`should return 10 if there are 10 slow answers with zero mistakes`, () => {
    assert.equal(countScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 10);
  });

  it(`should return 8 if there are 7 quick answers with 3 mistakes`, () => {
    assert.equal(countScore([2, 2, -2, 2, -2, -2, 2, 2, 2, 2], 0), 8);
  });

  it(`should return right number with various valid input`, () => {
    assert.equal(countScore([2, 2, 2, 2, 2, 2, 2, -2, -2, 2], 1), 12);
    assert.equal(countScore([1, 1, 2, 1, 1, 2, 2, -2, 2, 2], 2), 12);
    assert.equal(countScore([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 20);
    assert.equal(countScore([2, 2, 2, 2, 2, 2, 2, -2, 2, 2], 2), 16);
    assert.equal(countScore([1, -2, 1, -2, -2, 1, 2, 2, 2, 1], 0), 4);
    assert.equal(countScore([1, 1, 2, 2, 2, -2, 1, 1, -2, 2], 1), 8);
    assert.equal(countScore([1, 2, 1, 2, 1, 2, 1, 2, 1, 1], 3), 14);
  });
});
