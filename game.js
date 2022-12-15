



var gameBoardSize = 40;
var gamePoint = 0;
var gameSpeed = 100;

$(document).ready(function () {
    console.log('Ready player one!');
    createBoard();
    $(".btn").click(function(){startGame();});
});
var snake = {
    position: [[20, 20], [20, 19], [20, 18]],
    size: 3,
    direction: "r",
    alive: true,
};
var food = {
    position: [],
    present: false,
};
function createBoard() {
    $("#gameBoard").empty();
    var size = gameBoardSize;
    for ( i = 0 ; i < size; i ++ ) {
        $("#gameBoard").append('<div class="row"></div>');
        for(j = 0; j < size; j ++) {
            $(".row:last-child").append('<div class="pixel"></div>');
        };
    };
};
function moveSnake() {
    var head = snake.position[0].slice();

    switch(snake.direction) {
        case 'r':
            head[1] += 1;
            break;
        case 'l':
            head[1] -= 1;
            break;
        case 'u':
            head[1] -= 1;
            break;
        case 'd':
            head[1] += 1;
            break;
    };

    if (alive(head)) {
        $(".row:nth-child(" + head[0] + ") > .pixel:nth-child(" + head[1] + ")").addClass("snakePixel");

        for (var i =0; i < snake.size; i ++) {
            $(".row:nth-child(" + snake.position[i][0] + ") > .pixel:nth-child(" + snake.position[i][1] + ")").addClass("snakePixel");
        };

        if(head.every(function(e,i) {
            return e === food.position[i];
        })) {
            snake.size ++;
            food.present = false;
        };
    };
};