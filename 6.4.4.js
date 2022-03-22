function timer(num1, num2) {
  num1 = Number(prompt('Введите первое число'))
  num2 = Number(prompt('Введите второе число'))
  let step = num1;
  let timerId = setInterval(function() {
    console.log(step)
    if (step === num2) {
      clearInterval(timerId)
    }
    step++;
  }, 1000)
}
timer()