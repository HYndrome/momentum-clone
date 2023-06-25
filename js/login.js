const loginForm = document.querySelector("#login-page");
const mainPage = document.querySelector("#main-page");
const loginInput = loginForm.querySelector("#name");
const username = document.querySelector("#username");

function mainPagePainter() {
  const saveUsername = localStorage.getItem("username");
  if (saveUsername !== null) {
    loginForm.classList.remove("login");
    loginForm.classList.add("hidden");
    mainPage.classList.remove("hidden");
    username.innerText = saveUsername;
  }
}

function loginSumitHandler(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  mainPagePainter();
}

loginForm.addEventListener("submit", loginSumitHandler);

mainPagePainter();
