// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  let swapped = true;

  while(swapped) {
    swapped = false;

    for(let i = 1; i < array.length; i++) {
      if(array[i] > array[i+1]) {
        swap(array, i, i+1);
        console.log(array);
        swapped = true;
      }
    }
  }
  return array;
}

let array1 = [0, 4, 5, 6, 2, 9, 1, 3, 7];
console.log(bubbleSort(array1));

module.exports = {
  bubbleSort,
  swap
};
