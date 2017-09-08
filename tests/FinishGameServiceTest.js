describe("Test suit for FinishGameService", function () {

  it("Should return false (game unfinished)", function () {

    spyOn(WinnerChecker, "checkWin").and.returnValue(false);

    var result = FinishGameService.isEnd();

    expect(result).toBe(false);
  });

  it("Should end game and drawGame have benn called", function () {

    moves.length = 9;

    spyOn(FinishGameService, "drawGame");

    var result = FinishGameService.isEnd();

    expect(FinishGameService.drawGame).toHaveBeenCalled();
    expect(result).toBe(true);
  })

  it("Shoul end game and endGame have been called", function () {

    moves.length = 5;
    board[0] = 'X';
    board[1] = 'X';
    board[2] = 'X';    

    spyOn(FinishGameService, "endGame");

    var result = FinishGameService.isEnd();

    expect(FinishGameService.endGame).toHaveBeenCalled();
    expect(result).toBe(true);
  })
});
