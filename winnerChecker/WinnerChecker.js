'use strict'

var WinnerChecker = function () {

    this.checkWin = function (board, player) {
        var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (var i = 0; i < winCombinations.length; i++) {
            var combination = winCombinations[i],
                winCounter = 0;
            for (var j = 0; j <= 2; j++) {
                if (board[combination[j]] === player)
                    winCounter += 1;
            }
            if (winCounter === 3)
                return true;
        }
        return false;
    }
}