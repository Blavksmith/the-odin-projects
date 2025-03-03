const container = document.querySelector("#container");


/**This function generates the grid size according to user input */
function createGrid(gridSize){
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        row.style.width = `calc(100% / ${gridSize})`;
        row.style.height = `calc(100% / ${gridSize})`;
        container.appendChild(row);
    }

    //an event listener for a mouseover event in the container
    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains('row')){
            const cells = e.target;
            cells.style.backgroundColor = "black";
        };
    });
}

function changeGrid() {
    let num = prompt("Enter a number between 0-200");
    num = Number(num);
    if (num <= 200 && num != null) {
        removeGrid();
        createGrid(num);
    }
    else {
        alert("Input entered is invalid!! \nEnter an Integer(1-100)");
    }
}

function removeGrid(){
    const grid = document.querySelectorAll(".row");
    grid.forEach(row => {
        row.remove();
    })
}

function randomColor() { 
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;   
}


function getRandomColor() {
    let container = document.querySelector("#container");
    container.addEventListener("mouseover" , (e) => {
        if (e.target.classList.contains('row')){
            const cells = e.target;
            cells.style.backgroundColor = randomColor();
        };
    })
}


const gridSet = document.querySelector(".gridSet");
gridSet.addEventListener("click", changeGrid);

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
    const squares = document.querySelectorAll(".row");
    squares.forEach((square) => {
        square.style.backgroundColor = "";
    })
});

const mixedColor = document.querySelector(".random");
mixedColor.addEventListener("click", getRandomColor);

//initial grid size
createGrid(16);