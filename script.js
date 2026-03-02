const containerSize = 320
const container = document.querySelector(".container");
const button = document.querySelector("button");
button.textContent = "set your grid size";
let gridNo = 16;
let gridSize = (containerSize/gridNo) - 1;

button.addEventListener("click", () => {
    gridNo = parseInt(prompt("Set grid size "));
    if (isNaN(gridNo) || gridNo < 1 || gridNo > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    gridSize = (containerSize/gridNo) - 1;
    deleteGrid();
    createGrid();
})

function createGrid() {
    for (let cellIndex = 0; cellIndex < gridNo ** 2; cellIndex++) {
        let gridCell = document.createElement("div");
        gridCell.style.width = `${gridSize}px`;
        gridCell.style.height = `${gridSize}px`;
        gridCell.classList.add("gridCell");
        gridCell.addEventListener("mouseenter", () => {
            gridCell.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 - 0 + 1)) + 0}, ${Math.floor(Math.random() * (255 - 0 + 1)) + 0}, ${Math.floor(Math.random() * (255 - 0 + 1)) + 0})`;
        })
        container.appendChild(gridCell);
    }
}

function deleteGrid() {
    let currentGrid = document.querySelectorAll(".gridCell");
    currentGrid.forEach(element => {
        element.remove()
    });
}

createGrid()