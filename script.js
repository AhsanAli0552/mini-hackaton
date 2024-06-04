let loginBtn = document.getElementById("login")
let registeredBtn = document.getElementById("registered")
let nameField = document.getElementById("name-field")
let title = document.getElementById("title")
registeredBtn.onclick = function(){
  nameField.style.display = ''
    title.innerHTML = "Sign Up"
    registeredBtn.classList.add("disable")
    loginBtn.classList.remove("disable")
 }
 loginBtn.onclick = function(){
    nameField.style.display = "none"
    title.innerHTML = "Login"
    registeredBtn.classList.remove("disable")
    loginBtn.classList.add("disable")
 }

let users = new Set();
document.getElementById("login").addEventListener('click', function(){
   const userName = document.getElementById ("nameInput").value.trim();
   const userEmail = document.getElementById("emailInput").value.trim();
   const userpassword = document.getElementById ("passwordInput").value. trim ();
   if ( userEmail =="mbilal7388583@gmail.com" && userpassword == "abc123"){
   Toastify({
      text:` Login successfuly`,
      duration: 3000,
      gravity: 'top',
      position: 'center',
  }).showToast();
   }
else if (userEmail == "mbilal7388583" || userpassword == "abc123"){
   Toastify({
      text:` Password is incorrect`,
      duration: 3000,
      gravity: 'top',
      position: 'center',
  }).showToast();
}
else if (userEmail =="" || userpassword == "abc123"){
   Toastify({
      text:` Username is incorrect`,
      duration: 3000,
      gravity: 'top',
      position: 'center',
  }).showToast();
}
else {
   Toastify({
       text: 'User not found. Please register first.',
       duration: 3000,
       gravity: 'top',
       position: 'center',
   }).showToast();
}
})
const login = ()=>{
    
}


// todo js
// User data storage
const users1 = [];

// To-Do data storage
const todos = [];

// Registration functionality
document.getElementById("register-btn").addEventListener("click", registereduser);

// Login functionality
document.getElementById("login-btn").addEventListener("click", login);

// To-Do functionality
document.getElementById("add-todo-btn").addEventListener("click", addTodo);

// Functions for registration, login, and to-do management


// Store user data in local storage
localStorage.setItem("users", JSON.stringify(users));

// Store to-do data in local storage
localStorage.setItem("todos", JSON.stringify(todos));

// Retrieve user data from local storage
const storedUsers = JSON.parse(localStorage.getItem("users"));

// Retrieve to-do data from local storage
const storedTodos = JSON.parse(localStorage.getItem("todos"));



/* Add media queries to make the design responsive */