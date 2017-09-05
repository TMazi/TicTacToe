$(document).ready(function () {
    var canvas = document.getElementById('board'),
        helper = document.getElementById('helper'),
        reverseButton = document.getElementById('reverseButton');

    reverseButton.addEventListener("click", reverseMove);
    canvas.addEventListener("click", new GameService().onBoardClick);
    context = canvas.getContext('2d');
    var canvasSize = 600;
    var sectionSize = canvasSize / 3;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    helper.width = canvasSize;
    helper.height = canvasSize;
    new DrawingService().drawLines(sectionSize, canvasSize);
});

$(function () {
    $('#resultModal').on('show.bs.modal', function () {
        $(this).find('.modal-title').text("It's over!!");
        $(this).find('.modal-body').text("Player '" + player + "' won!");
        var canv = document.getElementById('helper')
        $(canv).addClass('animated fadeIn')
        var cont = canv.getContext('2d');
        cont.fillStyle = "black";
        cont.fillRect(0, 0, canv.width, canv.height);
    })
});

$(function () {
    $('#resultModal').on('hide.bs.modal', function () {
        window.setTimeout(function () {
            $('#helper').removeClass('animated fadeIn');
        }, 1000);
        var canv = document.getElementById('helper')
        var cont = canv.getContext('2d');
        cont.clearRect(0, 0, canv.width, canv.height);
    })
});

$(function () {
    $('#board').css('cursor', 'pointer');
});

$(function () {
    $('button').hover(function () {
        $(this).addClass('animated pulse');
    }, function () {
        $(this).removeClass('animated pulse');
    });
});

$(function () {
    $('.cb-value').click(function () {
        var mainParent = $(this).parent('.toggle-btn');
        if ($(mainParent).find('input.cb-value').is(':checked')) {
            $(mainParent).addClass('active');
        } else {
            $(mainParent).removeClass('active');
        }
    });

    $(function resetModal() {
        $('#resetModal').on('show.bs.modal', function () {
            $(this).find('.modal-title').text("Hey!");
            $(this).find('.modal-body').text("Are you sure you want to restart?");

            $(this).on('click', '.btn-ok', function (e) {
                $('#resetModal').modal('hide');
                $('#board').addClass('animated shake');
                window.setTimeout(function () {
                    $('#board').removeClass('animated shake');
                }, 2000);
                finished = false;
                new ResetGameService().resetGame();
            });
        })
    });
})
