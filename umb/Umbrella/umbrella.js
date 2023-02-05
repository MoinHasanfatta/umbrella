yellow = () => {
  document.getElementById("umbrella").src = "../images/Yellow umbrella.png";
  document.getElementById("logo").style.background = "#f3c83e";
};

blue = () => {
  document.getElementById("umbrella").src = "../images/Blue umbrella.png";
  document.getElementById("logo").style.background = "#0086b9";
};

pink = () => {
  document.querySelector("#umbrella").src = "../images/Pink umbrella.png";
  document.getElementById("logo").style.background = "#6e1c48";
};

let showLogo = document.getElementById("logo");
console.log(showLogo)

// showLogo.addEventListener("click", () => {
//   document.querySelector(".brand").style.display="block";
// });
