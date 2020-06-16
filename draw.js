const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


(function setup() {
    snake = new Snake();
    snake.draw();

    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

    }, 250);
}());

window.addEventListener('keydown', (evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
})