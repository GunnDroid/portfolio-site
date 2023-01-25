function myFunction() {
  // change body background and paragraph text toggle between dark mode on/off
  let element = document.body;
  element.classList.toggle("dark-mode");

  // Text change
  if (document.getElementById("lightDark").innerHTML === "Dark Mode") {
    document.getElementById("lightDark").innerHTML = "Light Mode";
  } else {
    document.getElementById("lightDark").innerHTML = "Dark Mode";
  }

  console.log(element);
}
