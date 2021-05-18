function createGrid(gridSize) {
    const container = document.querySelector('.container');
    let size = 600 / gridSize;
    console.log(container.getAttribute('size'));
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${size}px )`;
    for(let i=0;i<Math.pow(gridSize,2);i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

function colourFill() {
    this.style.backgroundColor = 'black';
}

function resetGrid() {
    div.forEach((div) => div.style.backgroundColor = 'transparent');
}

let gridSize=64;
createGrid(gridSize);

const container = document.querySelector('.container');
const div = container.querySelectorAll(':scope > *');
const button = document.querySelector('button')

div.forEach(div => div.addEventListener('mouseenter', colourFill));
button.addEventListener('click',resetGrid)