function myFunction() {
  let element = document.body;

  element.classList.toggle("dark-mode");

  if (document.getElementById("lightDark").innerHTML === "Dark Mode") {
    document.getElementById("lightDark").innerHTML = "Light Mode";
  } else {
    document.getElementById("lightDark").innerHTML = "Dark Mode";
  }
}
