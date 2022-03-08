const container = document.querySelector('body')
const gridContainer = document.querySelector('#gridContainer');

const header = document.createElement('h1');
header.classList.add("header");
header.textContent = "Etch-a-Sketch";
container.appendChild(header);


const resetButton = document.createElement('button');
resetButton.classList.add("button");
resetButton.textContent = "Reset";
container.appendChild(resetButton);

let test;
let numBox = 16;
grid = generateGrid(numBox);

function generateGrid(numBox) {
  gridContainer.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;

  for (let i = 0; i < numBox * numBox; i++) {
    const newGridItem = document.createElement("div");
    newGridItem.className = "gridItem";
    newGridItem.classList.add("item");
    gridContainer.append(newGridItem);
  }
  test = document.querySelectorAll(".item");
  test.forEach((test) => {
    test.addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = "purple";
    });
  });
}

function clearGrid() {
  gridContainer.innerHTML = "";
}

function resetGrid() {
  test.forEach((test) => {
    test.style.backgroundColor = "";
  });
  numBox = prompt("How wide would you like the Etch-a-Sketch to be?");
  console.log(numBox);
  clearGrid();
  generateGrid(numBox);
}

const buttonChoice = document.querySelector('.button');
console.log(buttonChoice);
buttonChoice.classList.add("button");
buttonChoice.addEventListener('click', resetGrid);

//need to use forEach to iterated through array of item divs
//look at rock, paper, scissors code to figure out syntax
// This handler will be executed only once when the cursor
// moves over the unordered list