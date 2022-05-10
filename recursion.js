/**
 * 주어진 숫자까지의 모든 숫자 더하기
 * 숫자 1 + 2 + 3 + 4 .... + n 을 계산하는 함수 sumTo(n) 만드기
 */
function sumTo(n) {
  if (n === 1) {
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

/**
 * 피보나치 수 계산하기
 * 피보나치 수는 첫째와 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열로, Fn = Fn-1 + Fn-2라는 공식으로 표현할 수 있습니다.
 * 처음 두 항은 1이고, 그다음 항들은 2(1+1),3(1+2),5(2+3)이므로 전체 수열은 1, 1, 2, 3, 5 , 8, 13, 21 ... 형태를 띱니다.
 * 피보나치 수는 황금 비율 등 우리 주변을 둘러싼 수많은 자연 현상과 관련이 있습니다.
 * n 번째 피보나치 수를 반환하는 함수 fib(n)을 작성해보세요.
 */
function fibonachi(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    b = c;
  }
  return b;
}
console.log(fibonachi(100));

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
// fib(77); // 연산에 너무 많은 시간이 걸린다
