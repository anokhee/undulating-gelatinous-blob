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
            230, 50,
            50, 100, 
            75, 200,
            100, 300,
            140, 365,
            180, 430,
            250, 450,
            320, 430,
            360, 365,
            400, 300,
            425, 200,
            450, 100,
            280, 50,
            false)
    },
    eyes: {
        left: {
            draw: two.makeEllipse(250 - 100, 250 - 50, 30, 30),
            pupil: two.makeCircle(250 - 100, 250 - 50, 5, 5),
            eyebrow: two.makeCurve(
                250 - 140, 250 - 100, // 0
                250 - 120, 250 - 120, // 1
                250 - 80, 250 - 120, // 2
                250 - 60, 250 - 100, // 3
                true)
        },
        right: {
            draw: two.makeEllipse(250 + 100, 250 - 50, 30, 30),
            pupil: two.makeCircle(250 + 100, 250 - 50, 5, 5),
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
    animateHead();
    animateEyes();
}).play(); // Finally, start the animation loop



two.update();