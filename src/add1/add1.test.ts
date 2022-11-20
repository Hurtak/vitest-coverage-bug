import { expect, test } from 'vitest';
import { add1 } from './add1';

test('add', () => {
  expect(add1(1)).toBe(2);
});
