// vanilla javascript

let button1 = document.getElementById('button1'); 

function increment() {
    button1.innerHTML = Number(button1.innerHTML) + 1 // string '1' 
}

button1.addEventListener('click', increment);

