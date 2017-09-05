'use strict'

var GameService = function () {

    var statisticsService = new StatisticsService();
    var drawingService = new DrawingService();
    var finishGameService = new FinishGameService();
    var movesService = new MovesService();

    this.changePlayer = function () {
        if (moves.length === 0)
            return this.change();
        else
            this.showModal();
        return false;
    }

    this.onBoardClick = function (event) {
        var rect = this.getBoundingClientRect();
        var x = Math.floor((event.clientX - rect.left) / (this.width / 3) + 1);
        var y = Math.floor((event.clientY - rect.top) / (this.height / 3) + 1);
        var position = (x + (y - 1) * 3) - 1;
        if (board[position] == null && !finished) {
            if (player === 'O') {
                drawingService.drawCircle(this, x, y);
                board[position] = 'O';
            }
            else {
                drawingService.drawCross(this, x, y);
                board[position] = 'X';
            }
            movesService.addToHistory(x, y, player);
            if (!finishGameService.isEnd())
                change();
            else
                statisticsService.countGames();
        }
    }

    this.change = function () {
        change();
    }

    this.showModal = function () {
        $('#warningModal').modal('show');
    }

    function change() {
        var span = document.getElementById('welcome_text');
        if (player == 'X')
            player = 'O';
        else player = 'X';
        span.textContent = 'Now playing: ' + player;
        return true;
    }
}