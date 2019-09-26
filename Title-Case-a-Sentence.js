function titleCase(str) {
  let arr = str.split(" ");

 let firstLetterCap = arr.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase());


  return firstLetterCap.join(' ')
}

titleCase("I'm a little tea pot");
console.log(titleCase("sHoRt AnD sToUt"))

//make str to arr, make empty array, find first index of every words in an arr
//switch first letter to uppercase and add last of letters sliced firstletter, join it to str.
