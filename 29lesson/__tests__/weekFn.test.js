//import {weekFn} from '../src/weekFn';

const weekFn = require('../src/weekFn');

console.log(weekFn.weekFn(1));

test('function weekFn', () => {
  expect(weekFn.weekFn(1)).toBe('Понеділок');
  expect(weekFn.weekFn(3)).toBe('Середа');
  expect(weekFn.weekFn(7)).toBe('Неділя');
  expect(weekFn.weekFn(9)).toBeNull();
  expect(weekFn.weekFn(1.5)).toBeNull();
  expect(weekFn.weekFn('2')).toBeNull();
});

// console.log(weekFn(1))   // 'Понеділок'
// console.log(weekFn(3))   // 'Середа'
// console.log(weekFn(7))   // 'Неділя'
// console.log(weekFn(9))   // null
// console.log(weekFn(1.5)) // null
// console.log(weekFn('2')) // null