function merge (head, tail) {
  const sortedArray = []

  let headIndex = 0
  let tailIndex = 0

  while (headIndex < head.length && tailIndex < tail.length) {
    if (head[headIndex] < tail[tailIndex]) {
      sortedArray.push(head[headIndex++])
    } else {
      sortedArray.push(tail[tailIndex++])
    }
  }

  while (headIndex < head.length) {
    sortedArray.push(head[headIndex++])
  }

  while (tailIndex < tail.length) {
    sortedArray.push(tail[tailIndex++])
  }

  console.log(sortedArray)

  return sortedArray
}

function mergeSort (array) {
  if (array.length < 2) return array

  const middle = array.length / 2

  const head = mergeSort(array.slice(0, middle))
  const tail = mergeSort(array.slice(middle, array.length))

  return merge(head, tail)
}

module.exports = mergeSort
