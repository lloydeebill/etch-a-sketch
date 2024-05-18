


const containerDiv = document.querySelector(".container");


const startButton = document.querySelector(".start-button"); 
const changeButton = document.querySelector(".change-button"); 
const resetButton = document.querySelector(".reset-button"); 



startButton.addEventListener("click", () => createGrid(16));
resetButton.addEventListener("click", resetGrid);
changeButton.addEventListener("click", () => {

  let userInput = prompt("Input size of grid from 1-100:");

  if (userInput > 100) {
    while ( userInput > 100) {
      userInput = prompt("Input again, need to be between 1-100:");
    }
  }

  createGrid(userInput);

});

function resetGrid(){

  const cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.classList.remove("hover-on");
  });

}

function randomPenColor() {

}


function createGrid(gridWidth) {

  containerDiv.innerHTML = '';

  const containerWidth = parseFloat(getComputedStyle(containerDiv).width); // Get container width

  const cellSize = containerWidth / gridWidth;

  let gridArea = gridWidth * gridWidth ;

  for ( let i = 0 ; i < gridArea; i++ ) {

    const cell = document.createElement("div");
  
    cell.classList.add("cell");
  
    containerDiv.appendChild(cell);

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
  
    cell.addEventListener('mouseenter', function(event) {
      // This function will be triggered when the mouse enters the cell
      cell.classList.add("hover-on");
    });
  
  }
  
}



