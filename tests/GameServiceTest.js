describe("Test suit for GameService", function () {

    var gameService = new GameService();

    it("Should change player", function () {
        moves = [];

        spyOn(gameService, "change").and.returnValue(true);
        var result = gameService.changePlayer();

        expect(result).toBe(true);
        expect(gameService.change).toHaveBeenCalled();
    });

    it("Should not change player", function () {
        moves = [];
        moves.length = 1;

        spyOn(gameService, 'showModal');

        var result = gameService.changePlayer();

        expect(result).toBe(false);
        expect(gameService.showModal).toHaveBeenCalled();
    });

});