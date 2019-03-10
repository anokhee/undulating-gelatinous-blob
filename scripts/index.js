var elem = document.getElementById('draw-face');
var two = new Two({
    width: 500,
    height: 500
}).appendTo(elem);

elem.style.border = "5px solid black";
elem.style.background = 'cornflowerblue';

function getRandomBoolean() {
    var randomNumber = Math.random() >= 0.5;
    return randomNumber;
}

var body = {
    head: {
        shouldChangeWidth: true,
        shouldChangeHeight: false,
        draw: two.makeCurve(
            250, 50, // 0
            50, 100, // 1 
            100, 300, // 2
            180, 430, // 3
            250, 450, // 4
            320, 430, // 5
            400, 300, // 6
            450, 100, // 7
            250, 50, // 8
            false)
    }
}

let head = body.head.draw;
head.linewidth = 5;
head.fill = '#3ff6ab';


function change(part, attr, min, max, deltaMin, deltaMax, x) {
    let delta = Math.random() * (deltaMax - deltaMin) + deltaMin;

    if (part[x]) {
        part[attr] += delta;
    } else if (!part[x]) {
        part[attr] -= delta;
    }

    if (part[attr] <= min) {
        part[x] = true;
    } else if (part[attr] >= max) {
        part[x] = false;
    }
}

two.bind('update', function (frameCount) {

    change(body.head.draw.vertices[1], "x", parseInt(-230), parseInt(-100), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(body.head.draw.vertices[7], "x", parseInt(100), parseInt(200), parseInt(1), parseInt(1), body.head.shouldChangeHeight);
    change(body.head.draw.vertices[0], "x", parseInt(-50), parseInt(20), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(body.head.draw.vertices[8], "x", parseInt(20), parseInt(50), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(body.head.draw.vertices[2], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(body.head.draw.vertices[6], "x", parseInt(100), parseInt(230), parseInt(1), parseInt(1), body.head.shouldChangeHeight);
    change(body.head.draw.vertices[3], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(.5), body.head.shouldChangeWidth);
    change(body.head.draw.vertices[5], "x", parseInt(100), parseInt(230), parseInt(1), parseInt(.5), body.head.shouldChangeHeight);
    change(body.head.draw.vertices[1], "y", parseInt(-250), parseInt(20), parseInt(1), parseInt(.5), body.head.shouldChangeHeight);
    change(body.head.draw.vertices[7], "y", parseInt(-250), parseInt(20), parseInt(1), parseInt(.5), body.head.shouldChangeHeight);
    change(body.head.draw.vertices[4], "y", parseInt(100), parseInt(250), parseInt(0), parseInt(1), body.head.shouldChangeWidth);

}).play(); // Finally, start the animation loop


two.update();