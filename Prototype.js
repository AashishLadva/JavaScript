const employee = {
  calcTax() {
    console.log("tax rat is 10%");
  },
};

const Aashish = {
  salary: 50000,
  calcTax() {
    //if we pass same function as parent class then it will give the priority to function that is created inside it's own body.
    console.log("tax rat is 20%");
  },
};

Aashish.__proto__ = employee; //this proto contains some inbuilt functions and it will automatically accessed by any class we don't need to define this proto and it also include's the methods that are defined in parent class

console.log(Aashish.calcTax());
console.log(Aashish);
