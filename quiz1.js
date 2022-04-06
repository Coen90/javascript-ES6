// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
class MyCounter {
  constructor(num) {
    this.num = num + 1;
  }
}

const myCounter = new MyCounter(2);
console.log(myCounter);

// 엘리
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = startValue + 1;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment(); // 1
console.log(counter.value);
counter.increment(); // 2
console.log(counter.value);
