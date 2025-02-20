const URL = "https://dummyjson.com/products";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn1");
const umg = document.querySelector("img");

btn.addEventListener("click", () => {
  getFacts();
});

const getFacts = async () => {
  console.log("getting data.");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  para.innerText = data.products[29].title;

  umg.setAttribute("src", data.products[29].images[0]);
};
