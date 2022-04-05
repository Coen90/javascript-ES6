// 주어딘 숫자 만큼 0 부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배 값을 다 출력하고 싶음
// function iterate(max, action)

// 내 답
function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}

function double(num) {
  console.log(num * 2);
}

function printer(num) {
  console.log(num);
}

iterate(10, printer);

// 엘리 답
function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}
function doubleAndLog(num) {
  console.log(num * 2);
}
iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

setTimeout(() => {
  console.log("1초 뒤 이 함수가 실행");
}, 3000);
