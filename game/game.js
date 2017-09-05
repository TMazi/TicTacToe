'use strict'

var player = 'X',
    board = [],
    moves = [],
    context,
    games = [],
    finished = false;
board.length = 9;

function reverseMove() {
    var position = new MovesService().reverseMove();
    new DrawingService().deleteFromBoard(position.x, position.y);
}

function changePlayerBefore() {
    new GameService().changePlayer();
}

function reset() {
    new ResetGameService().reset();
}