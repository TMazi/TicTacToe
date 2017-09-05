describe("Test suit for StatisticsService", function () {

    var statisticsService = new StatisticsService();

    it("Should return empty points", function () {
        games = [];

        spyOn(statisticsService, 'displayPoints');
        var result = statisticsService.countGames();
        expect(result).toBe(undefined);
    });

    it("Should return correctPoints", function () {
        games = [];
        var game = {
            winner: 'X',
            date: undefined
        }
        games.push(game);

        spyOn(statisticsService, 'displayPoints');
        var result = statisticsService.countGames();

        expect(result.xWins).toBe(1);
        expect(result.oWins).toBe(0);
        expect(result.draws).toBe(0);
    });
});