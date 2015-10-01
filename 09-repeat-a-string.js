function repeat(str, num) {
  var result = [];
  while (result.length < num) {
    result.push(str);
  }
  return result.join("");
}

repeat("abc", 3, "");