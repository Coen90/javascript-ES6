// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
// const array = ["🍌", "🍓", "🍇", "🍓"];
// let output1 = new Array();
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === "🍓") {
//     output1[i] = "🥝";
//   } else {
//     output1[i] = array[i];
//   }
// }
// console.log(array);
// console.log(output1);
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ["🍌", "🍓", "🍇", "🍓"];
const result = replace(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, target) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result++;
    }
  }
  return result;
}
const array2 = ["🍌", "🥝", "🍇", "🥝"];
console.log(count(array2, "🥝"));
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 내가 만든거
// function checker(array1, array2) {
//   let returnArray = new Array();
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         if (returnArray.indexOf(array1[i]) === -1) {
//           returnArray.push(array1[i]);
//         }
//       }
//     }
//   }
//   return returnArray;
// }
// const array3 = ["🍌", "🥝", "🍇"];
// const array4 = ["🍌", "🍓", "🍇", "🍓"];
// console.log(checker(array3, array4));

// 엘리
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
