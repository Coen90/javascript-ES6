let arr = new Array();
arr.push(new Object({ idx: 1, name: "a" }));
arr.push(new Object({ idx: 2, name: "b" }));
arr.push(new Object({ idx: 3, name: "c" }));

console.log(arr);

let config = {
  obj: arr,
};
console.log(config);

console.log(0 % 2);
const zero = parseInt("0");

console.log("0" % 2);
console.log(zero % 2);

const Person = {
  name: "Coen",
  gender: "male",
  sayHello: function () {
    console.log("Hi! My name is " + this.name);
  },
  age: 20,
};

console.log(typeof Person.age);
console.log(typeof Person.age);
console.log(typeof Person.age);
