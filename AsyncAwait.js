function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", id);
      resolve("success");
    }, 3000);
  });
}

(async function getAllData() {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
  console.log("getting data 4");
  await getData(4);
})(); //this extra round brackets are used to imediatly execute the function at run time without calling it.

// getAllData();    //if we use iife(() this round brackets that we use for imediate executation) then it will not reusable.
