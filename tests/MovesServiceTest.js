describe("Test suit for MovesServiceTest", function () {

    it("Shold not reverse move", function () {
        moves = [];

        var result = MovesService.reverseMove();

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

        var result = MovesService.reverseMove();

        expect(result.x).toBe(1);
        expect(result.y).toBe(1);
    });

    it("Should add new move to history", function () {

        moves = [];
        spyOn(MovesService, 'addToHistoryList');

        var result = MovesService.addToHistory(1, 1, 'X');
        var lastMove = moves[moves.length-1];

        expect(result.x).toBe(1);
        expect(result).toBe(lastMove);
    })
})
