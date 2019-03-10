var elem = document.getElementById('draw-face');
var two = new Two({

}).appendTo(elem);

elem.style.border = "10px solid black";
elem.style.background = '#2f5a5c';

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
    },
    eyes: {
        left: {
            draw: two.makeEllipse(250 - 100, 250 - 50, 30, 30),
            pupil: two.makeCircle(250 - 100, 250 - 50, 10)
        },
        right: {
            draw: two.makeEllipse(250 + 100, 250 - 50, 30, 30),
            pupil: two.makeCircle(250 + 100, 250 - 50, 10, 10)

        }
    }
}

let head = body.head.draw;
head.linewidth = 10;
head.fill = '#1faabc';

let eyes = two.makeGroup(body.eyes.left.draw, body.eyes.right.draw);
let pupils = two.makeGroup(body.eyes.left.pupil, body.eyes.right.pupil);


pupils.fill = 'black';
eyes.linewidth = 10;


let leftEye = two.makeGroup(eyes.children[0], pupils.children[0]);
// let rightEye = two.makeGroup(eyes.children[1], pupils.children[1]);




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

    change(head.vertices[1], "x", parseInt(-230), parseInt(-100), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(head.vertices[7], "x", parseInt(100), parseInt(200), parseInt(1), parseInt(1), body.head.shouldChangeHeight);
    change(head.vertices[0], "x", parseInt(-50), parseInt(20), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(head.vertices[8], "x", parseInt(20), parseInt(50), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(head.vertices[2], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(1), body.head.shouldChangeWidth);
    change(head.vertices[6], "x", parseInt(100), parseInt(230), parseInt(1), parseInt(1), body.head.shouldChangeHeight);
    change(head.vertices[3], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(.5), body.head.shouldChangeWidth);
    change(head.vertices[5], "x", parseInt(100), parseInt(230), parseInt(1), parseInt(.5), body.head.shouldChangeHeight);
    change(head.vertices[1], "y", parseInt(-250), parseInt(20), parseInt(1), parseInt(.5), body.head.shouldChangeHeight);
    change(head.vertices[7], "y", parseInt(-250), parseInt(20), parseInt(1), parseInt(.5), body.head.shouldChangeHeight);
    change(head.vertices[4], "y", parseInt(100), parseInt(250), parseInt(0), parseInt(1), body.head.shouldChangeWidth);

    change(leftEye.translation, "x", -50, 50, 0, 1, body.head.shouldChangeWidth);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.head.shouldChangeWidth);

    // rightEye.translation.x++;
}).play(); // Finally, start the animation loop



two.update();