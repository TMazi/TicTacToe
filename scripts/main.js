require.config({
    baseUrl: '',
    paths: {
        game: 'game/game',
        drawingService: 'game/DrawingService',
        movesService: 'game/MovesService',
        finishGameService: 'game/FinishGameService',
        winnerChecker: 'winnerChecker/WinnerChecker',
        statisticsService: 'game/StatisticsService',
        mainjquery: 'scripts/myJquery',
        gameService: 'game/GameService',
        resetService: 'game/ResetGameService',
    }
});

require(['game', 'drawingService', 'movesService', 'finishGameService',
    'winnerChecker', 'statisticsService', 'mainjquery', 'gameService', 'resetService'], function () {
    }); 
