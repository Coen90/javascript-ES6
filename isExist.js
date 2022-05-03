function isExist(arr, key, word) {
  let result = false;
  arr.forEach((m) => {
    if (m[key] == word) {
      result = true;
    }
  });
  return result;
}

let arr = new Array();
arr.push({ admMnu: 1 });
arr.push({ admMnu: 2 });
arr.push({ admMnu: 3 });

console.log(isExist(arr, "admMnu", 2));
