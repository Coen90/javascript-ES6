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

const today = new Date();
const hours = ("0" + today.getHours()).slice(-2);
const minutes = ("0" + today.getMinutes()).slice(-2);
const seconds = ("0" + today.getSeconds()).slice(-2);
const miliseconds = ("0" + today.getMilliseconds()).slice(-2);
console.log(today);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(miliseconds);
console.log("aasd");
console.log(hours + minutes + seconds + miliseconds);

const url = "/manage/manage-list";
const urls = url.split("/");
console.log(urls);

setTimeout(function () {
  const today = new Date();
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);
  const miliseconds = ("0" + today.getMilliseconds()).slice(-2);
  console.log(today);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  console.log(miliseconds);
  console.log("aasd");
  console.log(hours + minutes + seconds + miliseconds);
  setTimeout(function () {
    const today = new Date();
    const hours = ("0" + today.getHours()).slice(-2);
    const minutes = ("0" + today.getMinutes()).slice(-2);
    const seconds = ("0" + today.getSeconds()).slice(-2);
    const miliseconds = ("0" + today.getMilliseconds()).slice(-2);
    console.log(today);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    console.log(miliseconds);
    console.log("aasd");
    
    console.log(hours + minutes + seconds + miliseconds);
  }, 1900);
}, 1900);
