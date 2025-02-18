let arr = [1, 2, 3, 4, 5];

// arr.forEach((val, idx, arr) => {
//   //this is known as callback function because we pass function inside function as parameter
//   //for each contains three parameter first is each value that is coming one by one and another is index and third one is array it self.
//   //it will only use for arrays.
//   //   console.log(`value = ${val},index= ${idx}, array = ${arr}`);
// });

//=======================================================

const square = (val) => {
  console.log(val * val);
};

arr.forEach(square);
