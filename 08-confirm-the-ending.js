// 1st solution

function end(str, target) {
  var  word = str;
  var  num = target.length;
  var  lastchar = str.length;
  var  difleng = lastchar - num;
  console.log(num, lastchar, difleng);
  if(word.substr(difleng, lastchar) == target) {
    return true;
  }
  else {
    return false;
  }
}

end("Bastian", "n", "");

-----

// 2nd solution

function end(str, target) {
  if(str.substr(-target.length) == target) {
    return true
  }
  else {
    return false;
  }
}

end("Bastian", "n", "");