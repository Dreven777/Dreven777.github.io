//import {weekFn} from '../src/weekFn';

const weekFn = require('../src/weekFn');

console.log(weekFn.weekFn(1));

test('function weekFn', () => {
  expect(weekFn.weekFn(1)).not.toBeNull();
  expect(weekFn.weekFn(3)).not.toBeNull();
  expect(weekFn.weekFn(7)).not.toBeNull();
  expect(weekFn.weekFn(9)).not.toBeNull();
  expect(weekFn.weekFn(1.5)).not.toBeNull();
  expect(weekFn.weekFn('2')).not.toBeNull();
});