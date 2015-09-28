function factorialize(num) {
  var counter = 1; 
  fact = num;
  while(counter < num ) {
   fact = fact * (num - counter);
    counter++;
  }
  return fact;
}

factorialize(5);
