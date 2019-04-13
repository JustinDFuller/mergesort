function merge (head, tail) {}

function mergeSort (array) {
  const middle = array.length / 2

  const head = mergeSort(array.slice(0, middle))
  const tail = mergeSort(array.slice(middle + 1, array.length + 1))

  return merge(head, tail)
}

module.exports = mergeSort
