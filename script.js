createGrid();

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    const gridElement = document.querySelectorAll('.grid-item')
    gridElement.forEach(element => {
        element.style.backgroundColor = 'transparent';
    });
});


function createGrid(size = 16) {
    const grid = document.querySelector('#grid');
    grid.innerHTML = '';

    for (let index = 0; index < (size * size); index++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');

        gridElement.style.width = `${(400 / size)}px`;
        gridElement.style.height = `${(400 / size)}px`;

        gridElement.addEventListener('mouseover', () => {
            gridElement.style.backgroundColor = 'blue';
        });

        grid.appendChild(gridElement);
    }

}

const changeLayout = document.querySelector('#change-layout');
changeLayout.addEventListener('click', () =>{
    let newLayout = prompt("New layout size? Enter the amount of squares on one side:")

    while (newLayout > 100) {
        newLayout = prompt("New layout size must be less than 100, try again:");
    }

    createGrid(newLayout)
});
