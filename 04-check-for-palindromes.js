// 1st solution

function palindrome(str) {
  // Good luck!
  var nopunctuation = str.replace(/\W/g,"");
  var nospace = nopunctuation.replace(/\s/g,"");
  var stringreverse = nospace.toLowerCase();
  var finalreverse = stringreverse.split('').reverse().join('');
  if(finalreverse === stringreverse){
    return true;    
  }
  else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");

//2nd solution

function palindrome(str) {
  // Good luck!
  var stringreverse = str.replace(/[\W_]/g,"").toLowerCase();
  var finalreverse = stringreverse.split('').reverse().join('');
  return finalreverse === stringreverse;
}

palindrome("A man, a plan, a canal. Panama");