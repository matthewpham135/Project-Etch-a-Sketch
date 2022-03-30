

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
    