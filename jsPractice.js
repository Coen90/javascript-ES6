function method1 (callback) {
    console.log("=======");
    callback();
    console.log("=======");
}

function 콜백 () {
    console.log("콜백함수")
}

method1(콜백);