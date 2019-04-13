const test = require('ava')

const mergeSort = require('../src')

test('Even, unordered', function (t) {
  const input = [5, 10, 3, 1, 2, 4, 12, 15]
  const expected = [1, 2, 3, 4, 5, 10, 12, 15]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  console.log(mergeSort.iterations)
})

test('Odd, unordered', function (t) {
  const input = [5, 10, 3, 1, 2, 4, 12]
  const expected = [1, 2, 3, 4, 5, 10, 12]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  console.log(mergeSort.iterations)
})

test('Even, ordered', function (t) {
  const input = [1, 2, 3, 4, 5, 10, 12, 15]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), input)
  console.log(mergeSort.iterations)
})

test('Odd, ordered', function (t) {
  const input = [1, 2, 3, 4, 5, 10, 12]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), input)
  console.log(mergeSort.iterations)
})

test('Head is always higher', function (t) {
  const input = [10, 11, 12, 13, 1, 2, 3, 4]
  const expected = [1, 2, 3, 4, 10, 11, 12, 13]

  mergeSort.iterations = 0
  t.deepEqual(mergeSort(input), expected)
  console.log(mergeSort.iterations)
})
