let head = document.getElementById("head");

let heading = document.getElementsByClassName("heading");

let paragraph = document.getElementsByTagName("p");

let query = document.querySelector("p"); //it will give us first tag that is inside our html file.
let queries = document.querySelectorAll("p"); // it will give us all the tags that are inside our html file.

console.dir(query);
console.dir(queries);

console.dir(query.tagName); //this will return the tag name that is hold by variable.

let inTxt = document.querySelector("div");

console.log(inTxt.innerText); //if it found div tag and div tag has any other tag inside it then it will also print text of that tag

console.log(inTxt.innerHTML); //if tag contains any html tag and text then it will print that text and all html tags that are inside the tag.

//we can also change the html and text of the tag using this method.
inTxt.innerHTML = "<div>This was changed.</div>";
console.log(inTxt.innerHTML);
inTxt.innerText = "The Text Was Changed.";
console.log(inTxt.innerText);

console.log(inTxt.textContent); //it is same as innerText but it also include the text of the tag that is not visible to the user means hidden fields.

console.log("id = " + inTxt.getAttribute("id"));
console.log("class = " + inTxt.getAttribute("class"));

// inTxt.setAttribute("class", "newClass");
console.log("class after change = " + inTxt.getAttribute("class")); //we can also change the Attribute value with this method.

console.log(inTxt.classList);
inTxt.classList.add("newClass"); //we use this method instead of setAttribute because it will not remove the older class and take the both class properties and it will provide a list of class.

console.log(inTxt.style);
// inTxt.style.backgroundColor = "green"; //we can also change the style of the element from here.

let newButton = document.createElement("button"); //we can create elements with the help of this method.
newButton.innerText = "submit";
console.log(newButton);

// inTxt.append(newButton);    //append method add our element at the end of the tag.but inside the tag.

// inTxt.prepend(newButton); //prepend add element at the starting of tag but inside the tag.

// inTxt.before(newButton); //before method add element before the starting of parent tag.

inTxt.after(newButton); //and it add after the element ends.

// inTxt.remove(); //it will remove the element.
