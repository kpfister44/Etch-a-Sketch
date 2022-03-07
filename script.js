const container = document.querySelector('body')
const gridContainer = document.querySelector('.gridContainer');

const header = document.createElement('h1');
header.classList.add("header");
header.textContent = "Etch-a-Sketch";
container.appendChild(header);


const resetButton = document.createElement('button');
resetButton.classList.add("button");
resetButton.textContent = "Reset";
container.appendChild(resetButton);

const buttonChoice = document.querySelector('.button');
console.log(buttonChoice);
buttonChoice.classList.add("button");
buttonChoice.addEventListener('click', resetGrid);
buttonChoice.addEventListener('click', generateGrid);

let BLOCKS_PER_CHART = 16 * 16;
let grid = generateGrid();

function generateGrid() {
  let newGridItem
  gridContainer.style.gridTemplateColumns = "repeat(25, 1fr)";
  gridContainer.style.gridTemplateRows = "repeat(25, 1fr)";

  BLOCKS_PER_CHART = prompt("How many squares wide would you like the Etch-a-Sketch to be?");
  BLOCKS_PER_CHART *= BLOCKS_PER_CHART

  for(let i = 0; i < BLOCKS_PER_CHART; i++) {
    newGridItem = document.createElement("div");
    newGridItem.className = "gridItem";
    newGridItem.classList.add ("item");
    gridContainer.append(newGridItem);
  }
}

function resetGrid () {
  test.forEach((test) => {
    test.style.backgroundColor = "";
});
}

//need to use forEach to iterated through array of gridItemRow1 divs
//look at rock, paper, scissors code to figure out syntax
let test = document.querySelectorAll(".item");
console.log(test)
// This handler will be executed only once when the cursor
// moves over the unordered list
  test.forEach((test) => {
      test.addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "purple";
        // reset the color after a short delay
        /*setTimeout(function() {
          event.target.style.backgroundColor = "";
        }, 1000);*/
      });
      });
      