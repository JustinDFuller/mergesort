function merge (head, tail) {
  // Use a temp array to store sorted values
  const sortedArray = []

  // each array gets its own index so they can be iterated separately
  let headIndex = 0
  let tailIndex = 0

  // The first time around we'll compare each index, adding the lesser
  // value to the sorted array, while incrementing the index trackers
  // to point to the next highest value in the array that it was "removed" from
  while (headIndex < head.length && tailIndex < tail.length) {
    mergeSort.iterations++

    if (head[headIndex] < tail[tailIndex]) {
      sortedArray.push(head[headIndex++])
    } else {
      sortedArray.push(tail[tailIndex++])
    }
  }

  // At this point either head or tail is empty.
  // Since we can assume each array is ordered
  // we can just append it to the end of the sorted array
  // because we know the lowest element in head or tail
  // was higher than every other element already sorted.
  // only one of the below while loops will run
  while (headIndex < head.length) {
    mergeSort.iterations++

    sortedArray.push(head[headIndex++])
  }

  while (tailIndex < tail.length) {
    mergeSort.iterations++

    sortedArray.push(tail[tailIndex++])
  }

  return sortedArray
  // You could also do something like:
  // return sortedArray.concat(head.slice(headIndex)).concat(tail.slice(tailIndex))
}

function mergeSort (array) {
  // Arrays of length 0 or 1 are already sorted.
  if (array.length < 2) return array

  const middle = array.length / 2

  const head = mergeSort(array.slice(0, middle))
  const tail = mergeSort(array.slice(middle, array.length))

  return merge(head, tail)
}

// counting iterations for testing purposes
mergeSort.iterations = 0

module.exports = mergeSort
