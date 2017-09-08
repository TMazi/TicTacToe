'use strict'

var GameService = (function () {

    var changePlayer = function () {
        if (moves.length === 0)
            return this.change();
        else
            this.showModal();
        return false;
    }

    var onBoardClick = function (event) {
        var rect = this.getBoundingClientRect(),
            x = Math.floor((event.clientX - rect.left) / (this.width / 3) + 1),
            y = Math.floor((event.clientY - rect.top) / (this.height / 3) + 1),
            position = (x + (y - 1) * 3) - 1;
        if (board[position] == null && !finished) {
            if (player === 'O') {
                DrawingService.drawCircle(this, x, y);
                board[position] = 'O';
            }
            else {
                DrawingService.drawCross(this, x, y);
                board[position] = 'X';
            }
            MovesService.addToHistory(x, y, player);
            if (!FinishGameService.isEnd())
                change();
            else
                StatisticsService.countGames();
        }
    }

    var showModal = function () {
        $('#warningModal').modal('show');
    }

    var change = function() {
        var span = document.getElementById('welcome_text');
        if (player == 'X')
            player = 'O';
        else player = 'X';
        span.textContent = 'Now playing: ' + player;
        return true;
    }
    return {
        changePlayer: changePlayer,
        showModal: showModal,
        change: change,
        onBoardClick: onBoardClick
    }
})();