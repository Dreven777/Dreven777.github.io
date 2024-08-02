//import {weekFn} from '../src/weekFn';

const weekFn = require('../src/weekFn');

console.log(weekFn.weekFn(1));

test('function weekFn', () => {
  expect(weekFn.weekFn(1)).not.toBeNull();
});