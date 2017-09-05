describe("Test suit for WinnerChecker", function () {

    var winnerChecker = new WinnerChecker();

    it("Should return true (game won)", function () {
        player = 'O'
        board[0] = 'O';
        board[3] = 'O';
        board[6] = 'O';
        
        var result = winnerChecker.checkWin(board, player);

        expect(result).toBe(true);
    });

    it("Should return false (game not won yet)", function () {
        player = 'O'
        board[0] = 'O';
        board[3] = 'O';
        board[6] = 'X';
        
        var result = winnerChecker.checkWin(board, player);

        expect(result).toBe(false);
    });
});