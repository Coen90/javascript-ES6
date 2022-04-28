/**
 * 주어진 숫자까지의 모든 숫자 더하기
 * 숫자 1 + 2 + 3 + 4 .... + n 을 계산하는 함수 sumTo(n) 만드기
 */
function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(10000));

/**
 * Factorial 만들기
 * ex> 숫자 1 * 2 * 3 * 4 ... * n
 */
function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
