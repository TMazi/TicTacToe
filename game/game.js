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
    DrawingService.deleteFromBoard(position.x, position.y);
}

function changePlayerBefore() {
    GameService.changePlayer();
}

function reset() {
    ResetGameService.reset();
}