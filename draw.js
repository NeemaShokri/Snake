const canvas = document.getElementById("canvas");
const score = document.getElementById("score");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

(function setup() {

    grid = new Grid();
    grid.draw();

    snake = new Snake();
    snake.draw();

    fruit = new Fruit();
    fruit.pickLocation();

    stateManager = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        grid.draw();
        snake.update();
        fruit.draw();
        snake.draw();
        
        score.textContent = "Score: " + (1 + snake.total);

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        if (snake.lose()) {
            console.log("Snake Died");
            window.clearInterval(stateManager);
            canvas.style.opacity = 0.5;
        }

    }, 62.5);

}());

window.addEventListener('keydown', (evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
})