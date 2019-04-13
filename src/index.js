function merge (head, tail) {
  // Use a temp array to store sorted values
  const sortedArray = []

  // each array gets its own index so they can be iterated separately
  let headIndex = 0
  let tailIndex = 0

  // The first time around we'll compare each index, adding the lesser
  // value to the sorted array
  while (headIndex < head.length && tailIndex < tail.length) {
    mergeSort.iterations++

    if (head[headIndex] < tail[tailIndex]) {
      sortedArray.push(head[headIndex++])
    } else {
      sortedArray.push(tail[tailIndex++])
    }
  }

  // add the rest of head to sorted array
  while (headIndex < head.length) {
    mergeSort.iterations++

    sortedArray.push(head[headIndex++])
  }

  // add rest of tail to sorted array last
  while (tailIndex < tail.length) {
    mergeSort.iterations++

    sortedArray.push(tail[tailIndex++])
  }

  return sortedArray
}

function mergeSort (array) {
  // Arrays of length 0 or 1 are already sorted.
  if (array.length < 2) return array

  // Find where to split the array
  const middle = array.length / 2

  // The first half of the array, 0 through middle
  const head = mergeSort(array.slice(0, middle))
  // The second half of the array, middle through end
  const tail = mergeSort(array.slice(middle, array.length))

  // merge and sort head with tail
  return merge(head, tail)
}

mergeSort.iterations = 0

module.exports = mergeSort
