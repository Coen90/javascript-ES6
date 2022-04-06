// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 워급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 내 코드
class MyPayment {
  #hourlyWage;
  #workHour;
  #workDay;
  constructor(hourlyWage, workHour, workDay) {
    this.#hourlyWage = hourlyWage;
    this.#workHour = workHour;
    this.#workDay = workDay;
  }

  monthlyWage = () => {
    return this.#hourlyWage * this.#workDay * this.#workHour;
  };
}

const regular = new MyPayment("10000", "8", "20");
const partTime = new MyPayment("8000", "5", "20");

console.log(regular.monthlyWage());
console.log(partTime.monthlyWage());

//// 엘리

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  carculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee("엘리", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(ellie.carculatePay());
console.log(bob.carculatePay());
