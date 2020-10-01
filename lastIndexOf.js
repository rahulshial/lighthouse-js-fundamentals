
const lastIndexOf = function (array, searchValue) {
  if (array.length === 0) {
    return -1;
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === searchValue) {
        return i;
      } else if (i === 0) {
        return -1;
      }
    }
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);