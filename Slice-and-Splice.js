/*You are given two arrays and an index.

Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.

Begin inserting elements at index nof the second array.

Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
  let slicedArr2 = arr2.slice();
  console.log(slicedArr2);
  for(let i=0 ; i <arr1.length; i++) {
    slicedArr2.splice(n, 0, arr1[i])
    n++
  }
  return slicedArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
