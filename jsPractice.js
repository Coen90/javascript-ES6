function method1 (callback) {
    console.log("=======");
    callback();
    console.log("=======");
}

function callbackFunc () {
    console.log("콜백함수!!!!!")
}

method1(callbackFunc);