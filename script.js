

let i=0, n=16;

const container = document.querySelector('.container');

container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n).replace(/X/g,_=> (i++).toString(n) )

const cell = document.querySelectorAll('.cell');

cell.forEach(element => {
    element.addEventListener('mouseover', 
        e => e.target.classList.add('hover')
    )
});

const reset = document.querySelector('#reset-button');

reset.onclick = function (){ 
    resetGrid();
    
    do{
    let x = prompt("Enter the number of squares per side: ", "16");
    }while(x > 99 || x < 1);

    let y = 0;
    container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(x)}</div>`
    .repeat(x).replace(/X/g,_=> (y++).toString(x));
    const ncell = document.querySelectorAll('.cell');
    ncell.forEach(element => {
        element.addEventListener('mouseover', 
            e => e.target.classList.add('hover')
        )
    });
};

function resetGrid(){
    Array.from(cell).forEach((element) => element.classList.remove('hover'));
}
