function createGrid(gridSize) {
    const container = document.querySelector('.container');
    let size = 600 / gridSize;
    console.log(container.getAttribute('size'));
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${size}px )`;
    for(let i=0;i<Math.pow(gridSize,2);i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }

    const div = container.querySelectorAll(':scope > *');
    div.forEach(div => div.addEventListener('mouseenter', colourFill));
}

function colourFill() {
    this.style.backgroundColor = 'black';
}

function resetGrid() {
    let sliderNum = document.querySelector('input').valueAsNumber;
    const container = document.querySelector('.container');
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    createGrid(sliderNum);
}

function updateSliderLabel() {
    let x = document.querySelector('input').valueAsNumber;
    document.querySelector('label').innerHTML = x;
}

let gridSize=16;
createGrid(gridSize);

const button = document.querySelector('button')
button.addEventListener('click',resetGrid)