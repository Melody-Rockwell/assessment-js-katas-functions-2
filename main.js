function sum(a, b) {
  return a + b;
}
// let answer = sum(8, 4);
// console.log(answer);

function multiply(a, b) {
  let total = 0;
  let count = 0;

  while (count < b) {
    total = sum(a, total);
    count++;
  }
  return total;
}
// let answer = multiply(6, 4);
// console.log(answer);

function power(a, b) {
  total = 1;
  count = 0;
  while (count < b) {
    total = multiply(a, total);
    count++;
  }
  return total;
}
// let answer = power(3, 4);
// console.log(answer);

function factorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a - 1);
}
console.log(factorial(5));

function fibonacci(a) {
  if (a === 2) {
    return [0, 1];
  } else {
    let series = fibonacci(a - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}
// console.log(fibonacci(8));
