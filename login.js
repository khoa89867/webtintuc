
var exitElement = document.getElementById("exit")
var formLoginElement = document.getElementsByClassName("allsLogin")[0]
var registerElement = document.getElementsByClassName("register")[0]
var bodyElement = document.getElementsByTagName("body")[0]
const overlay = document.getElementById("overlay");

registerElement.onclick = function() {
    formLoginElement.style.display = "block"
    overlay.style.display = "block";
}

exitElement.onclick = function() {
    formLoginElement.style.display = "none"
    overlay.style.display = "none";
}
function togglePassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
}