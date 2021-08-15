const colorBtn = document.querySelector(".color-btn");
const bodyBg = document.querySelector("body");
const span = document.querySelector("span");

//const colors = ["yellow", "red", "green", "#3b5998"];
const digitLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

colorBtn.addEventListener("click", getHex);

function getHex() {
  //let random = Math.floor(Math.random() * colors.length);
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += digitLetters[Math.floor(Math.random() * digitLetters.length)];
  }

  bodyBg.style.backgroundColor = `${hex}`;
  span.innerText = `${hex}`;
}

