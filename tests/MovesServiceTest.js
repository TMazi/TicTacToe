describe("Test suit for MovesServiceTest", function () {

    var movesService = new MovesService();

    it("Shold not reverse move", function () {
        moves = [];

        var result = movesService.reverseMove();

        expect(result.x).toBe(undefined);
        expect(result.y).toBe(undefined);
    });


    it("Shold reverse and return last move", function () {
        moves = [];
        var move = {
            x: 1,
            y: 1,
            player: 'X'
        }
        moves.push(move);

        var result = movesService.reverseMove();

        expect(result.x).toBe(1);
        expect(result.y).toBe(1);
    });

    it("Should add new move to history", function () {

        moves = [];
        spyOn(movesService, 'addToHistoryList');

        var result = movesService.addToHistory(1, 1, 'X');
        var lastMove = moves[moves.length-1];

        expect(result.x).toBe(1);
        expect(result).toBe(lastMove);
    })
})
