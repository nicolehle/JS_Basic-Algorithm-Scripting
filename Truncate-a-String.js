//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//Return the truncated string with a <...>ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let targetStr = str.slice(str, num);
  if(num < str.length){
    return targetStr + "..."
  }return targetStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Set 'if' statement to show a full sentence when the 'num' is full length of the sentece.
