let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-btn");
let loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", function check(e) {
  e.preventDefault();
  let username = loginForm.username.value;
  let password = loginForm.password.value;

  if (username === "abcd" && password === "1234") {
    alert("You have successfully logged in.");
    load();
  } else {
    loginErrorMsg.style.display = "inline";
  }
});

function load() {
  window.location.href = "levels.html";
}
