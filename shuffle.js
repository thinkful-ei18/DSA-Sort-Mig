'use strict';

function shuffle(array){
  console.log('array is', array.length);


  let temp;
  for(let i = 0 ; i < array.length ; i++){
    let randIndex1 = Math.floor( Math.random() * array.length );
    let randIndex2 = Math.floor( Math.random() * array.length );
    swap(array,randIndex1, randIndex2);
  }
  return array;
}

function swap(array,i,j){
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

console.log(shuffle([1,2,3,4,5,6]));
