function num(n1) {
    return function(n2) {
      return n1 + n2
    }
    
  }
  const sum = num(1);
  
  sum(2)
  console.log(sum(2))