let btn1 = document.getElementById("btn1");
// btn1.onclick = (evt) => {
//   console.log("button was clicked");
//   console.log(evt.type);
//   console.log(evt.target);
// };

let btn2 = document.getElementById("btn2");
btn2.ondblclick = () => console.log("button was clicked 2x");

let div1 = document.getElementById("div1");
div1.onmouseover = () => console.log("you are inside div.");

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked");
  console.log(evt.type);
  console.log(evt.target);
});

const btnEvent = () => {
  console.log("Hello");
};

//if we write normal event like onclick then it will override the previous event but it will add event in the previous event means it will not override the event.
btn1.addEventListener("click", btnEvent);

btn1.removeEventListener("click", btnEvent); //it will remove the event.

let theme = document.getElementById("theme");
let bodyStyle = document.querySelector("body");

let mode = "white";

theme.addEventListener("click", () => {
  if (mode === "white") {
    mode = "black";
    bodyStyle.classList.add("dark");
    bodyStyle.classList.remove("light");
  } else {
    mode = "white";
    bodyStyle.classList.add("light");
    bodyStyle.classList.remove("dark");
  }
});
