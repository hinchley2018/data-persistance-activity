/*
IMPORTANT: some of this code contains more than what we have learned inside of class so far.
I have marked the sections where you need to change something with //Task #: what you need to do
*/

//Task 1: retrieve user name from local storage, if it does assign to this variable
let userName = "Placeholder user name"
//Task 1.5: don't prompt if there was a user name loaded from localStorage
userName = window.prompt("Welcome to our e-commerce site! Please enter your name");
//Task 2: when the user enter's their name store in localStorage

//Note: this displays the user
let userH1 = document.getElementById("greet-user");
userH1.textContent = userName;

//Note: this section displays products on the webpage
let productsUl = document.getElementById("products");
let li = document.createElement("li");


