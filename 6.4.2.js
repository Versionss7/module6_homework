function simpleNum(num) {
  
  num = Number(prompt ('Введите число'));
  
  if (num <= 1 || num > 1000) {
    alert('Данные неверны')
    console.log('Данные неверны')
    return;
    } 
 for (i = 2; i < num; i++) {
   if (num % i === 0 && num !== 2) {
     alert('Составное число')
     console.log('Составное число')
     return;
   }
            
 }
     alert('Простое число')
     console.log('Простое число')
     return;

}
simpleNum();