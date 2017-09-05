'use strict'

var DrawingService = function () {

    this.drawLines = function (sectionSize, canvasSize) {
        var start = 30,
            lenght = canvasSize - 30;
        context.lineWidth = 3;
        context.lineCap = 'round';
        context.strokeStyle = '#bcc2eb';
        context.beginPath();

        for (var y = 1; y <= 2; y++) {
            context.moveTo(start, y * sectionSize);
            context.lineTo(lenght, y * sectionSize);
        }

        for (var x = 1; x <= 2; x++) {
            context.moveTo(x * sectionSize, start);
            context.lineTo(x * sectionSize, lenght);
        }

        context.stroke();
    }

    this.drawCircle = function (canvas, x, y) {
        var centerX = (canvas.width / 6) * (2 * x - 1),
            centerY = (canvas.height / 6) * (2 * y - 1),
            radius = 60;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.save()
        context.lineWidth = 11;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 7;
        context.shadowColor = "black";

        var gradient = context.createLinearGradient(centerX - 50, centerY - 50, centerX + 50, centerY + 50);
        gradient.addColorStop("0", "#00ff00");
        gradient.addColorStop("0.5", "#66ff33");
        gradient.addColorStop("1.0", "#66ffff");
        context.strokeStyle = gradient;

        context.stroke();
        context.restore();
    }

    this.drawCross = function(canvas, x, y) {
        var centerX = (canvas.width / 6) * (2 * x - 1),
            centerY = (canvas.height / 6) * (2 * y - 1),
            lenght = 60;

        context.beginPath();
        context.moveTo(centerX - lenght, centerY - lenght);
        context.lineTo(centerX + lenght, centerY + lenght);
        context.moveTo(centerX + lenght, centerY - lenght);
        context.lineTo(centerX - lenght, centerY + lenght);
        context.save()
        context.lineWidth = 11;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 7;
        context.shadowColor = "black";
        var gradient = context.createLinearGradient(centerX - 50, centerY - 50, centerX + 50, centerY + 50);
        gradient.addColorStop("0", "#ff9900");
        gradient.addColorStop("0.5", "#ff3300");
        gradient.addColorStop("1.0", "red");
        context.strokeStyle = gradient;
        context.stroke();
        context.restore();
    }

    this.deleteFromBoard = function(x, y) {
        var canvas = document.getElementById('board');
        var someSize = (canvas.width / 3);
        context.clearRect(someSize * (x - 1) + 15, someSize * (y - 1) + 15, someSize - 30, someSize - 30);
    }
}