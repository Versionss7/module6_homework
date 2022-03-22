

function evenAndOdd() {
  
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 65, 0, 'Фрукты', 'Овощи', 'Одежда', 'd']
    let even = 0;
    let odd = 0;
    let zero = 0;
    let str = 0;
    
    
    for ( i = 0; i <= arr.length -1; i++) {
      if (arr[i] === 0 ) {
          zero++;
          continue;
      }
      if (arr[i]%2 === 0) {
          even++;
        
        
      } else if (typeof (arr[i]) === 'string') {
              str++;   
      
      } else {
              odd++;
          } 
      
      
    }
    
    console.log( +even+ ' Четных элементов')
    console.log( +odd+  ' Нечетных элементов')
    console.log( +zero+ ' Элементов null')
    console.log( +str+ ' Элементов string')
    }
    evenAndOdd();