const range = function(start, end, step) {
  let outputArray = [];
  let i = start;
  if (start > end || step <= 0){
    return outputArray;
  }
  
  while (i <= end) {
    outputArray.push(i);
    i += step;
  }
  return outputArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 10, -5));