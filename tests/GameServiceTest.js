describe("Test suit for GameService", function () {

    it("Should change player", function () {
        moves = [];

        spyOn(GameService, "change").and.returnValue(true);
        var result = GameService.changePlayer();

        expect(result).toBe(true);
        expect(GameService.change).toHaveBeenCalled();
    });

    it("Should not change player", function () {
        moves = [];
        moves.length = 1;

        spyOn(GameService, 'showModal');

        var result = GameService.changePlayer();

        expect(result).toBe(false);
        expect(GameService.showModal).toHaveBeenCalled();
    });

});