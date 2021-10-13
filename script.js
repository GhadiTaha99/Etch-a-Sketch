const container = document.getElementById("grid-container");
const gridRange = document.getElementById("gridRange");
const selectOutput = document.getElementById("row-width-value");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const grayBtn = document.getElementById("gray-btn");
let rowsValue = 16;
let cellColor = "gray";
  
createGrid = (rows = 16) => {
  container.setAttribute('style', `grid-template-columns: repeat(${rows}, 2fr); grid-template-rows: repeat(${rows}, 2fr);`);
  for (let i = 0; i < rows * rows; i++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = cellColor;
      })
      container.appendChild(div); 
    }
    };

  gridRange.addEventListener('input', function (e) {
    rowsValue = e.target.value;
    selectOutput.textContent = `${rowsValue} x ${rowsValue}`;
    resetGrid();
  });




const gridClear = () => {
  console.log("clicked");
  let cells = document.querySelectorAll(".cell");
    cells.forEach( (cell) => {
        cell.style.backgroundColor= "white";
    })
  };

const resetGrid = () => {
  deleteGrid();
  createGrid(rowsValue);
}

function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

const resetActive = () => {
  console.log("removed");
  rainbowBtn.classList.remove('active');
  grayBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
}

const gridEraser = () => {
  resetActive();
  eraserBtn.classList.add('active');
  cellColor = "white";
  cells = document.querySelectorAll(".cell");
  cells.forEach( (cell) => {
  cell.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = cellColor;
  })})}
  


const gridGray = () => {
  resetActive();
  grayBtn.classList.add('active');
  cellColor = "gray";
  cells = document.querySelectorAll(".cell");
  cells.forEach( (cell) => {
  cell.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = cellColor;
})})}

const gridRainbow = () => {
  resetActive();
  rainbowBtn.classList.add('active');
  cells = document.querySelectorAll(".cell");
  cells.forEach( (cell) => {
    cell.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = getRandomColor();
  })
  })

}

const deleteGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
}
}

createGrid(rowsValue);
clearBtn.addEventListener("click", (gridClear));
rainbowBtn.addEventListener("click", (gridRainbow));
eraserBtn.addEventListener("click", (gridEraser));
grayBtn.addEventListener("click",gridGray);