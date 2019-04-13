const test = require('ava')

const mergeSort = require('../src')

test('Even, unordered', function (t) {
  const input = [5, 10, 3, 1, 2, 4, 12, 15]
  const expected = [1, 2, 3, 4, 5, 10, 12, 15]

  t.deepEqual(mergeSort(input), expected)
})

test('Odd, unordered', function (t) {
  const input = [5, 10, 3, 1, 2, 4, 12]
  const expected = [1, 2, 3, 4, 5, 10, 12]

  t.deepEqual(mergeSort(input), expected)
})

test('Even, ordered', function (t) {
  const input = [1, 2, 3, 4, 5, 10, 12, 15]

  t.deepEqual(mergeSort(input), input)
})

test('Odd, ordered', function (t) {
  const input = [1, 2, 3, 4, 5, 10, 12]

  t.deepEqual(mergeSort(input), input)
})
