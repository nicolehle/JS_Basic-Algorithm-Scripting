
//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith()method, which was introduced in ES2015.
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let lastWord = str.substring(str.length-target.length, str.length);
  console.log(lastWord)
  if(lastWord.includes(target)) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

//Used substring() method istead of endsWith() with inculdes() method.
//Got a target words range from str.length-target.length (beginning of target words at the end of a sentence) to str.length(the end of the sentence)
//so that function checks a target element in case of it's longer word as well.
