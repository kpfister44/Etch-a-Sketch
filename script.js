const gridContainer = document.querySelector('.gridContainer')

let BLOCKS_PER_CHART = 16;
let row1 = generateRow1();
let row2 = generateRow2();
let row3 = generateRow3();
let row4 = generateRow4();
let row5 = generateRow5();
let row6 = generateRow6();
let row7 = generateRow7();
let row8 = generateRow8();
let row9 = generateRow9();
let row10 = generateRow10();
let row11 = generateRow11();
let row12 = generateRow12();
let row13 = generateRow13();
let row14 = generateRow14();
let row15 = generateRow15();
let row16 = generateRow16();


function generateRow1() {
  let gridItem

  for(let i = 0; i < BLOCKS_PER_CHART; i++) {
    gridItem = document.createElement("div");
    gridItem.className = "gridItemRow1";
    gridItem.classList.add ("item");
    gridItem.textContent = "X";
    gridContainer.append(gridItem);
  }
}

function generateRow2() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow2";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }

function generateRow3() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow3";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }

function generateRow4() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow4";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
function generateRow5() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow5";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow6() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow6";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow7() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow7";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow8() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow8";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow9() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow9";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow10() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow10";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow11() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow11";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow12() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow12";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow13() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow13";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow14() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow14";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow15() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow15";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
  }
  function generateRow16() {
    BLOCKS_PER_CHART = 16;
    for(let i = 0; i < BLOCKS_PER_CHART; i++) {
      gridItem = document.createElement("div");
      gridItem.className = "gridItemRow16";
      gridItem.classList.add ("item");
      gridItem.textContent = "X";
      gridContainer.append(gridItem);
    }
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
      });
  });

  // reset the color after a short delay
  /*setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);*/
