const containerSize = 320
const container = document.querySelector(".container");
const button = document.querySelector("button");
button.textContent = "set your grid size";
let gridNo = 16;
let gridSize = (containerSize/gridNo) - 1;

button.addEventListener("click", () => {
    gridNo = parseInt(prompt("Set grid size "));
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
            gridCell.style.backgroundColor = "blue";
        })
        gridCell.addEventListener("mouseleave", () => {
            gridCell.style.backgroundColor = "red";
        })
        container.appendChild(gridCell);
    }
}

function deleteGrid() {
    currentGrid = document.querySelectorAll(".gridCell");
    currentGrid.forEach(element => {
        element.remove()
    });
}

createGrid()