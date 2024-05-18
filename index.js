


const containerDiv = document.querySelector(".container");


const startButton = document.querySelector(".start-button"); 
const changeButton = document.querySelector(".change-button"); 


startButton.addEventListener("click", createGrid(16,16));
changeButton.addEventListener("click", () => {

  let userInput = prompt("Input size of grid from 1-100:");

  if (userInput > 100) {
    while ( userInput > 100) {
      userInput = prompt("Input again, need to be between 1-100:");
    }
  }

  createGrid(userInput);

});



function createGrid(gridWidth) {

  let gridArea = gridWidth * gridWidth;

  for ( let i = 0 ; i < gridArea; i++ ) {

    const grid = document.createElement("div");
  
    grid.classList.add("grid");
  
    containerDiv.appendChild(grid);
  
    grid.addEventListener('mouseenter', function(event) {
      // This function will be triggered when the mouse enters the grid
      grid.classList.add("hover-on");
    });
  
  }
  
}



