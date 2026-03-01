const container = document.querySelector(".container");

for (let cellIndex = 0; cellIndex < 256; cellIndex++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    container.appendChild(gridCell);
}
