/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.

let result = arr.filter(x => Boolean(x) !== false);
console.log(result)
return result;
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, "ate", "", false, 9]));


/*
Solution:

To remove all falsy values, use filter() method
filter() loop through all index in an array.
To get every falsy values as boolean, use Boolean() method.

*/
