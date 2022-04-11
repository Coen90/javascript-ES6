// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds 가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (isNaN(seconds)) {
    throw new Error("숫자가 아님!");
  } else if (seconds < 0) {
    throw new Error("0보다 작음!");
  } else {
    setTimeout(() => {
      callback();
    }, seconds * 1000);
  }
}
try {
  runInDelay(() => {
    console.log("setTimeout 구현완료");
  }, -1);
} catch (error) {
  console.log(error);
}
console.log("asdf");
