function fibonacciGenerator(n) {
  var output = [];

  if (n == 1) {
    output.push(0);
  } else if (n == 2) {
    output.push(0);
    output.push(1);
  } else {
    var a = 0;  
    var b = 1;  
    output.push(a);  
    output.push(b);  
    
    for (var i = 2; i < n; i++) {
      var sum = a + b; 
      output.push(sum);  
      a = b;  
      b = sum;  
    }
  }

  return output;
}
