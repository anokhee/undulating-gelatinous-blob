var elem = document.getElementById('draw-face');
var two = new Two({

}).appendTo(elem);

/* BEGIN ELEM STYLES */ 

elem.style.border = "10px solid black";
elem.style.background = '#2f5a5c';

/* END ELEM STYLES */

function getRandomBoolean() {
    var randomNumber = Math.random() >= 0.5;
    return randomNumber;
}

var body = {
    shouldChange: true, 
    shouldNotChange: false,
    head: {
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
            pupil: two.makeCircle(250 - 100, 250 - 50, 10),
            eyebrow: two.makeCurve(
                250 - 140, 250 - 100, // 0
                250 - 120, 250 - 120, // 1
                250 - 80, 250 - 120, // 2
                250 - 60, 250 - 100, // 3
                true)
        },
        right: {
            draw: two.makeEllipse(250 + 100, 250 - 50, 30, 30),
            pupil: two.makeCircle(250 + 100, 250 - 50, 10, 10),
            eyebrow: two.makeCurve(
                250 + 140, 250 - 100, // 0
                250 + 120, 250 - 120, // 1
                250 + 80, 250 - 120, // 2
                250 + 60, 250 - 100, // 3
                true)

        }
    }
}

let head = body.head.draw;
head.linewidth = 10;
head.fill = '#1faabc';


let leftEye = two.makeGroup(body.eyes.left.draw, body.eyes.left.pupil, body.eyes.left.eyebrow);
let rightEye = two.makeGroup(body.eyes.right.draw, body.eyes.right.pupil, body.eyes.right.eyebrow);

leftEye.linewidth = 10;
rightEye.linewidth = 10;
leftEye.children[1].fill = 'black';
rightEye.children[1].fill = 'black';
leftEye.children[2].fill = 'none';
rightEye.children[2].fill = 'none';




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
    change(head.vertices[1], "x", parseInt(-230), parseInt(-100), parseInt(1), parseInt(1), body.shouldChange);
    change(head.vertices[7], "x", parseInt(100), parseInt(200), parseInt(1), parseInt(1), body.shouldNotChange);
    change(head.vertices[0], "x", parseInt(-50), parseInt(20), parseInt(1), parseInt(1), body.shouldChange);
    change(head.vertices[8], "x", parseInt(20), parseInt(50), parseInt(1), parseInt(1), body.shouldNotChange);
    change(head.vertices[2], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(1), body.shouldChange);
    change(head.vertices[6], "x", parseInt(100), parseInt(230), parseInt(1), parseInt(1), body.shouldNotChange);
    change(head.vertices[3], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[5], "x", parseInt(100), parseInt(230), parseInt(1), parseInt(.5), body.shouldNotChange);
    change(head.vertices[1], "y", parseInt(-250), parseInt(20), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[7], "y", parseInt(-250), parseInt(20), parseInt(1), parseInt(.5), body.shouldNotChange);
    change(head.vertices[4], "y", parseInt(100), parseInt(240), parseInt(0), parseInt(1), body.shouldChange);
    change(leftEye.translation, "x", -50, 50, 0, 1, body.shouldNotChange);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.shouldChange);
    change(rightEye.translation, "x", 0, 70, 0, 1), body.shouldNotChange;
    change(rightEye.translation, "y", -50, 50, 0, 1, body.shouldChange); 
}).play(); // Finally, start the animation loop



two.update();