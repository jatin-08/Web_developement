
// StickyFunction

window.onscroll = function () { myFunction() };

var navbar = document.querySelectorAll(".container-fluid");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//  Signup & login

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

const profile = document.querySelector("#profile");
const wrapper = document.querySelector(".wrapper");
const icon1 = document.querySelector("#cross");

wrapper.addEventListener("click", (e) => {
    if (e.target == wrapper) {
        wrapper.classList.add("active");
    }
});

profile.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

icon1.addEventListener("click", () => {
    wrapper.classList.add("active");
});
