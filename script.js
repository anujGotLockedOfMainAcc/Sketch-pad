let color = "black";
let screenSize = "16";
let screen = document.querySelector(".screen");

// FUNCTION TO CREATE BOARD
function createBoard(Size) {
  screen.style.gridTemplateColumns = `repeat(${Size},1fr)`;
  screen.style.gridTemplateRows = `repeat(${Size},1fr)`;

  let numdivs = Size * Size;
  for (let i = 0; i < numdivs; i++) {
    let div = document.createElement("div");
    // div.classList.add("square");
    div.style.border = "1px solid black";
    div.addEventListener("mouseover", colorSquare);
    screen.insertAdjacentElement("beforeend", div);
  }
}

createBoard(screenSize);

// to change size
function changeSize(input) {
  if (input >= 1 && input <= 100) {
    screenSize = input;
    createBoard(input);
  } else {
  }
}

// change color
function changeColor(choice) {
  color = choice;
}

// to color squares
function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
  } else {
    this.style.backgroundColor = `${color}`;
  }
}
// to clear scrreen
let clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", clear);

function clear() {
  let squares = screen.querySelectorAll("div"); // Select div elements with class "square"
  squares.forEach((square) => (square.style.backgroundColor = "white"));
}
