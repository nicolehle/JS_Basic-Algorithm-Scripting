//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
//If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for(let i = 0; i < arr.length; i++){
    num = arr[i];

   if(func(num)){
     //second argument of findElement is function. arr[i] is its argument.
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//second argument of findElement is function. arr[i] is its argument.
