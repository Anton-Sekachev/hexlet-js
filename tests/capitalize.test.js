import { strict as assert } from 'node:assert';
// eslint-disable-next-line import/extensions
import capitalize from '../src/capitalize.js';

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');
// assert(capitalize('') === '');
// assert(capitalize('hello') === 'Hello');

// eslint-disable-next-line import/extensions
// import capitalize from '../src/capitalize.js';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

console.log('Все тесты пройдены!');
