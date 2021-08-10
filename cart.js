/*
IMPORTANT: some of this code contains more than what we have learned inside of class so far.
I have marked the sections where you need to change something with //Task #: what you need to do
*/

//Task 1: retrieve user name from local storage, if it does assign to this variable
let userName = localStorage.getItem('userName')
let userH1 = document.getElementById("greet-user");
userH1.textContent = userName;

//Task 4: read from localStorage productsInCart array
let productsInCart = [];

for (let index = 0; index < productsInCart.length; index++) {
    let p = productsInCart[index];
    
}