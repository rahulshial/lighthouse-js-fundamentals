const concat = function (array1, array2) {
  let concatArray = array1.concat(array2);
  return concatArray;
}

const merge = function (array1, array2) {
  let concatArray = array1.concat(array2);
  concatArray.sort();
  return concatArray;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

// console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
// console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
// console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
// console.log(concat([5, 10], []), "=?", [5, 10]);

// var hege = ["Cecilie", "Lone"];
// var stale = ["Emil", "Tobias", "Linus"];
// var children = hege.concat(stale);
// console.log(children);