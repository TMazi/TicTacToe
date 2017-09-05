describe("Test suit for FinishGameService", function () {

  var finishService = new FinishGameService();

  it("Should return false (game unfinished)", function () {
    var winnerChecker = new WinnerChecker();

    spyOn(winnerChecker, "checkWin").and.returnValue(false);

    var result = finishService.isEnd();

    expect(result).toBe(false);
  });

  it("Should end game and drawGame have benn called", function () {

    moves.length = 9;

    spyOn(finishService, "drawGame");

    var result = finishService.isEnd();

    expect(finishService.drawGame).toHaveBeenCalled();
    expect(result).toBe(true);
  })

  it("Shoul end game and endGame have been called", function () {

    moves.length = 5;
    board[0] = 'X';
    board[1] = 'X';
    board[2] = 'X';    

    var winnerChecker = new WinnerChecker();

    spyOn(finishService, "endGame");

    var result = finishService.isEnd();

    expect(finishService.endGame).toHaveBeenCalled();
    expect(result).toBe(true);
  })
});
