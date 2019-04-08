let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let foods = [];

let colors = [
    'blue',
    'green',
    'red',
    'orange',
    'purple',
    'teal'
];

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {

    for(let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        let food = new Food(x, y, 10, color);
        foods.push(food);
    }

    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < foods.length; i++) {
        foods[i].draw(c);
    }

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});