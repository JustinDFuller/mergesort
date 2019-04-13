const test = require('ava')

const mergeSort = require('../src')

function nLogN (input) {
  return Math.round(input.length * Math.log2(input.length))
}

test('Even, unordered', function (t) {
  const input = [5, 10, 3, 1, 2, 4, 12, 15]
  const expected = [1, 2, 3, 4, 5, 10, 12, 15]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  t.deepEqual(mergeSort.iterations, nLogN(input))
})

test('Odd, unordered', function (t) {
  const input = [5, 10, 3, 1, 2, 4, 12]
  const expected = [1, 2, 3, 4, 5, 10, 12]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  t.deepEqual(mergeSort.iterations, nLogN(input))
})

test('Even, ordered', function (t) {
  const input = [1, 2, 3, 4, 5, 10, 12, 15]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), input)
  t.deepEqual(mergeSort.iterations, nLogN(input))
})

test('Odd, ordered', function (t) {
  const input = [1, 2, 3, 4, 5, 10, 12]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), input)
  t.deepEqual(mergeSort.iterations, nLogN(input))
})

test('Head is always higher', function (t) {
  const input = [10, 11, 12, 13, 1, 2, 3, 4]
  const expected = [1, 2, 3, 4, 10, 11, 12, 13]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  t.deepEqual(mergeSort.iterations, nLogN(input))
})

test('Alternate descending', function (t) {
  const input = [4, 1, 3, 2]
  const expected = [1, 2, 3, 4]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  t.deepEqual(mergeSort.iterations, nLogN(input))
})
