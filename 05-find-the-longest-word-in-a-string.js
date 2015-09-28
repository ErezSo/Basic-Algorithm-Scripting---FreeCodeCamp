function findLongestWord(str) {
  str = str.split(' ');
  var longest = 0;
  var theword = 'placeholder';
  for(var i = 0; i < str.length; i++) {
    if(longest < str[i].length) {
      longest = str[i].length;
      theword = str[i];
    }
  }
  return theword.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
