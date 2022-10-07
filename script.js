// Dark mode

// function myFunction() {
//   let element = document.body;
//   element.classList.toggle("dark-mode", "light-mode");
// }

// // Webpage starts light

// function lightDark() {
//   if (button === )
// }

let button = document.getElementById("button");
button.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
};
