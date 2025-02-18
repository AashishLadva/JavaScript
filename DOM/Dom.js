let head = document.getElementById("head");

let heading = document.getElementsByClassName("heading");

let paragraph = document.getElementsByTagName("p");

let query = document.querySelector("p"); //it will give us first tag that is inside our html file.
let queries = document.querySelectorAll("p"); // it will give us all the tags that are inside our html file.

console.dir(query);
console.dir(queries);

console.dir(query.tagName); //this will return the tag name that is hold by variable.
