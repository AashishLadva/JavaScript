function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 2000);
  });
}

// console.log("fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
// });

console.log("fetching data 1");
asyncFunc1().then((res) => {
  console.log("fetching data 2");
  asyncFunc2().then((res) => {});
});
