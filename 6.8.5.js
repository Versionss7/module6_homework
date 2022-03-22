const num = (x, n) => {
    x = prompt('Введите число');
    n = prompt('Введите степень');
    const result = x**n;
    alert(result);
    console.log(result);
    return result;
  }
  
  num();