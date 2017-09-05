'use strict'

var ResetGameService = function () {

    var drawingService = new DrawingService();

    this.reset = function () {
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

    this.resetGame = function () {
        board = [];
        moves = [];
        player = 'X';
        var canvas = document.getElementById('board');
        context.clearRect(0, 0, canvas.width, canvas.height);
        var ul = document.getElementById("moves");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        var span = document.getElementById('welcome_text');
        span.textContent = 'Now playing: ' + player;
        drawingService.drawLines(200, 600);
        $('.score_text').removeClass('animated flash');
    }
}