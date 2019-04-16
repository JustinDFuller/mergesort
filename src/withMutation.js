function merge (array, begin, middle, end, sortedArray) {
  console.log(`begin: ${begin} middle: ${middle} end: ${end}`)
  // each array gets its own index so they can be iterated separately
  let headIndex = begin
  let tailIndex = middle
  let sortedIndex = begin
  let i = begin

  // The first time around we'll compare each index, adding the lesser
  // value to the sorted array, while incrementing the index trackers
  // to point to the next highest value in the array that it was "removed" from
  while (headIndex < middle && tailIndex < end) {
    mergeSort.iterations++

    if (array[headIndex] < array[tailIndex]) {
      sortedArray[i++] = array[headIndex++]
    } else {
      sortedArray[i++] = array[tailIndex++]
    }
  }

  // At this point either head or tail is empty.
  // Since we can assume each array is ordered
  // we can just append it to the end of the sorted array
  // because we know the lowest element in head or tail
  // was higher than every other element already sorted.
  // only one of the below while loops will run
  while (headIndex < middle) {
    mergeSort.iterations++

    sortedArray[i++] = array[headIndex++]
  }

  while (tailIndex < end) {
    mergeSort.iterations++

    sortedArray[i++] = array[tailIndex++]
  }

  console.log('sorting', sortedArray)
}

function _mergeSort (array, begin, end, sortedArray) {
  // Arrays of length 0 or 1 are already sorted.
  if (begin < end) {
    const mid = (begin + end) / 2
    const middle = Math.floor(mid)

    _mergeSort(array, begin, middle, sortedArray)
    _mergeSort(array, Math.ceil(mid), end, sortedArray)

    merge(array, begin, Math.ceil(mid), end, sortedArray)
  }
}

function mergeSort (array) {
  const sortedArray = []

  _mergeSort(array, 0, array.length, sortedArray)

  return sortedArray
}

// counting iterations for testing purposes
mergeSort.iterations = 0

module.exports = mergeSort
