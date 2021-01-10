let button1 = document.getElementById('button1'); // cody
let button2 = document.getElementById('button2'); // rosie
let button3 = document.getElementById('button3'); // elsa

function changeNameToCody() {
    button1.innerHTML = 'Cody'
}


button1.addEventListener('click', changeNameToCody);


function changeNameToRosie() {
    button2.innerHTML = 'Rosie'
}


button2.addEventListener('click', changeNameToRosie);


function changeNameToElsa() {
    button3.innerHTML = 'Elsa'
}


button3.addEventListener('click', changeNameToElsa);