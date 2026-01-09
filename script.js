function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "admin" && p === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

function showPage(pageId, el) {
  document.querySelectorAll(".page").forEach(p =>
    p.classList.remove("active-page")
  );

  document.getElementById(pageId).classList.add("active-page");

  document.querySelectorAll(".side-menu a").forEach(a =>
    a.classList.remove("active")
  );

  el.classList.add("active");
  toggleMenu();
}
