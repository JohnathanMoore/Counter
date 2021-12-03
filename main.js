var output = document.querySelector('.output');
var add = document.querySelector('.add');
var sub = document.querySelector('.sub');
var clear = document.querySelector('.clear');

let count = 0;

add.addEventListener('click', () => {
    count++;
    output.innerHTML = count;
})
sub.addEventListener('click', () => {
    count--
    output.innerHTML = count;
})
clear.addEventListener('click', () => {
    count *= 0;
    output.innerHTML = count;
})