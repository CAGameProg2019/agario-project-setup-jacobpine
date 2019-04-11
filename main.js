let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mpos;

let player;
let foods = [];

let colors = [
    '#FFFF00',
    '#FF9900',
    '#FF0000',
    '#00FF00',
    '#00FFFF',
    '#0099FF',
    '#FF00FF',
    '#9900FF'
];

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);

    player = new Player(canvas.width/2, canvas.height/2, 25, randomColor());

    for(let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        let food = new Food(x, y, 8, color);
        foods.push(food);
    }

    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    player.x = mpos.x;
    player.y = mpos.y;

    for(let i = 0; i < foods.length; i++) {
        foods[i].draw(c);
    }

    player.draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event) {
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
