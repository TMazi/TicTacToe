'use strict'

var ResetGameService = (function () {

    var reset = function () {
        if (!finished)
            $('#resetModal').modal('show');
        else {
            $('#resetModal').modal('hide');
            $('#board').addClass('animated shake');
            window.setTimeout(function () {
                $('#board').removeClass('animated shake');
            }, 2000);
            finished = false;
            this.resetGame();
        }
    }

    var resetGame = function () {
        board = [];
        moves = [];
        player = 'X';
        var canvas = document.getElementById('board'),
            ul = document.getElementById("moves"),
            span = document.getElementById('welcome_text');
        context.clearRect(0, 0, canvas.width, canvas.height);
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        span.textContent = 'Now playing: ' + player;
        DrawingService.drawLines(200, 600);
        $('.score_text').removeClass('animated flash');
    }

    return {
        reset: reset,
        resetGame: resetGame
    };
})();