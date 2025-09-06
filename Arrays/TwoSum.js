let history = {};

twoSum = (array, target) => {
  for ([i, element] of array.entries()) {
    value = Math.abs(target - element);
    if (value in history) {
      return [history[value],i];
    }
    else{
      history[element] = i;
    }
  }
}

console.log(twoSum([2,7,11,15],9));
