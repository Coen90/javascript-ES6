// typeof: 데이터 타입을 활인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = "";
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = function () {}; // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = Symbol(); // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);
