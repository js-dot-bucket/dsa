
chunkArray = (array, chunk) => {
  let newArray = [];
  for (let i=0; i<array.length; i+=chunk) {
    newArray.push(array.slice(i, i+chunk));
  }
  return newArray;
}

console.log(chunkArray([1,2,3,4,5],2));
console.log(chunkArray([1,2,3,4,5,6,7,8],3));
