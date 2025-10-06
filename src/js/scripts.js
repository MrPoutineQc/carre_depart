// CARTE 1
const col = document.getElementsByClassName('col')[0];

if (col) {
    col.addEventListener('click', () => {
        document.getElementsByClassName("back")[0].classList.toggle("d-none");
        document.getElementsByClassName("carte")[0].classList.toggle("d-none");
    });
}

// CARTE2
const col2 = document.getElementsByClassName('col')[1];

if (col2) {
    col2.addEventListener('click', () => {
        document.getElementsByClassName("back")[1].classList.toggle("d-none");
        document.getElementsByClassName("carte")[1].classList.toggle("d-none");
    });
}

// CARTE 3
const col3 = document.getElementsByClassName('col')[2];

if (col3) {
    col3.addEventListener('click', () => {
        document.getElementsByClassName("back")[2].classList.toggle("d-none");
        document.getElementsByClassName("carte")[2].classList.toggle("d-none");
    });
}

// CARTE 4
const col4 = document.getElementsByClassName('col')[3];

if (col4) {
    col4.addEventListener('click', () => {
        document.getElementsByClassName("back")[3].classList.toggle("d-none");
        document.getElementsByClassName("carte")[3].classList.toggle("d-none");
    });
}

// CARTE 5
const col5 = document.getElementsByClassName('col')[4];

if (col5) {
    col5.addEventListener('click', () => {
        document.getElementsByClassName("back")[4].classList.toggle("d-none");
        document.getElementsByClassName("carte")[4].classList.toggle("d-none");
    });
}