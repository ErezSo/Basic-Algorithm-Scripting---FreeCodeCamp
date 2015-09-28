function titleCase(str) {
  var newstr = str.toLowerCase().split(" ");
  for (var i = 0; i < newstr.length; i++) {
    newstr[i] = newstr[i].replace(newstr[i].charAt(0), newstr[i].charAt(0).toUpperCase());
  }

  return newstr.join(" ");
}

titleCase("I'm a little tea pot", "");