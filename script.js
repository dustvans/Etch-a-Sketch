

function createGrid() {
    const grid = document.querySelector('#grid');

    for (let index = 0; index < 256; index++) {
        const gridElement = document.createElement('div');
        gridElement.style.outline = '1px solid red';
        gridElement.style.width = '25px';
        gridElement.style.height = '25px';
        grid.appendChild(gridElement);
        
    }

    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.width = '400px';


}

createGrid();