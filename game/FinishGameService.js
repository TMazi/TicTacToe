'use strict'

var FinishGameService = (function () {

    var isEnd = function () {
        if (WinnerChecker.checkWin(board, player)) {
            this.endGame()
            return true;
        }
        else if (moves.length === 9) {
            this.drawGame();
            return true;
        }
        else return false;
    }

    var endGame = function () {
        $("." + player + "wins").addClass('animated flash');
        $('#resultModal').modal('show');
        var game = {
            winner: player,
            date: new Date()
        }
        games.push(game);
        var ul = document.getElementById("games"),
            li = document.createElement("li"),
            hour = game.date.getHours(),
            minutes = game.date.getMinutes(),
            seconds = game.date.getSeconds();
        li.className += ('animated fadeIn');
        li.appendChild(document.createTextNode('Winner: ' + game.winner + ' ' + hour + ':' + minutes + ':' + seconds));
        ul.appendChild(li);
        finished = true;
    }

    var drawGame = function () {
        $(".draws").addClass('animated flash');
        $('#drawModal').modal('show');
        var game = {
            winner: 'Drawn',
            date: new Date()
        }
        games.push(game);
        var ul = document.getElementById("games"),
            li = document.createElement("li"),
            hour = game.date.getHours(),
            minutes = game.date.getMinutes(),
            seconds = game.date.getSeconds();
        li.className += ('animated fadeIn');
        li.appendChild(document.createTextNode(game.winner + ' ' + hour + ':' + minutes + ':' + seconds));
        ul.appendChild(li);
        finished = true;
    }

    return {
        isEnd: isEnd,
        endGame: endGame,
        drawGame: drawGame
    };
})();