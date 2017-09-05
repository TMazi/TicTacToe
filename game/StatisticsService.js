'use strict'

var StatisticsService = function () {

    this.countGames = function () {
        if (games.length > 0) {
            var points = {
                xWins: 0,
                oWins: 0,
                draws: 0
            }
            for (var i = 0; i < games.length; i++) {
                if (games[i].winner === 'X')
                    points.xWins++;
                else if (games[i].winner === 'O')
                    points.oWins++;
                else points.draws++;
            }
            this.displayPoints(points);
            return points;
        }
    }

    this.displayPoints = function(points) {
            if (points.xWins > 0)
                document.getElementById('xWins').textContent = 'Player "X" won: ' + points.xWins;
            if (points.oWins > 0)
                document.getElementById('oWins').textContent = 'Player "O" won: ' + points.oWins;
            if (points.draws > 0)
                document.getElementById('draws').textContent = 'Drawn: ' + points.draws;
    }
}