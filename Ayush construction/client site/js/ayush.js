
var button = document.querySelector("#home");
var sidebar = document.querySelector("#mysidebar");
var icon = document.querySelector("#icon");
// var view = document.querySelector("#view");
// var img = document.querySelector("#bgimg");

const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");



loginBtn.addEventListener("click", () => {
    moveBtn.classList.add('rightBtn');
    login.classList.add('loginform');
    signup.classList.remove('signupform');
    moveBtn.innerHTML = "Login";
});
signupBtn.addEventListener("click", () => {
    moveBtn.classList.remove('rightBtn');
    login.classList.remove('loginform');
    signup.classList.add('signupform');
    moveBtn.innerHTML = "Signup";
});

// console.log(img);

button.addEventListener('click', () => {
    sidebar.classList.add('slide');

});

button.addEventListener("dblclick",()=>{
    sidebar.classList.remove('slide');
});

icon.addEventListener('click', () => {
    sidebar.classList.remove('slide')
});

// img.addEventListener('mouseenter',()=>{
//      view.classList.add('block')
// });

const profile = document.querySelector("#profile");
const wrapper = document.querySelector(".wrapper");
const icon1 = document.querySelector("#icon1");

profile.addEventListener("click", () => {
    wrapper.classList.add("open");
});

icon1.addEventListener("click", () => {
    wrapper.classList.remove("open");
});