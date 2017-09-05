'use strict'

var MovesService = function () {

    this.addToHistory = function (x, y, player) {
        var move = {
            x: x,
            y: y,
            player: player
        };
        this.addToHistoryList(x, y, player);
        moves.push(move);
        return move;
    }

    this.reverseMove = function () {
        if (moves.length > 0 && !finished) {
            var toReverse = moves.pop();
            var position = (toReverse.x + (toReverse.y - 1) * 3) - 1;
            board[position] = null;
            $('.moves li:last-child').remove();
            return {
                x: toReverse.x,
                y: toReverse.y,
            }
        }
        else {
            return {
                x: undefined,
                y: undefined,
            }
        }
    }

    this.addToHistoryList = function (x, y, player) {
        var ul = document.getElementById("moves"),
            li = document.createElement("li");
        li.className += 'animated fadeIn';
        li.appendChild(document.createTextNode("[" + x + "," + y + "] " + player));
        ul.appendChild(li);
    }
}