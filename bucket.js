'use strict';

function bSort(array,min,max){
  let bucketCount = max - min + 1;
  let buckets = new Array(bucketCount);
  let result = [];
  for (let i = 0; i <array.length; i++){
    buckets[array[i] - min] = array[i];
  }
  for(let j = 0; j <buckets.length; j++){
    if(typeof buckets[j] ==='number'){
      result.push(buckets[j]);
    }
  }
  return result;
}

console.log(bSort([3,2,5,1,4,6,9,50],1,50));
