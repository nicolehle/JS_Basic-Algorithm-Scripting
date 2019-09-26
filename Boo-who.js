//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
  /*  if(bool === ture | bool === false) {
      return ture;
      } return false */
  return typeof bool === 'boolean';
}

booWho(null);

// First, 'if statement' came up with, but considering efficiency, rewrite it with 'typeof'.
