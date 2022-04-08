// function makeIterator(initialValue, maxValue, callback) {
//   return {
//     [Symbol.iterator]: () => {
//       const max = maxValue;
//       let num = initialValue;
//       return {
//         next() {
//           return { value: callback(num++), done: num > max };
//         },
//       };
//     },
//   };
// }

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
// multiple.return();
multiple.throw("Error! ");
next = multiple.next();
console.log(next.value, next.done);
