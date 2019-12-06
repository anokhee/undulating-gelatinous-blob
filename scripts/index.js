// Turns #draw-face into a canvas element of sorts
var elem = document.getElementById('draw-face');
var two = new Two({
    width: 600,
    height: 500

}).appendTo(elem);

// Decides initial increase/decrease of the change() function
function getRandomBoolean() {
    var randomNumber = Math.random() >= 0.5;
    return randomNumber;
}

// Contains all numerical data for the blob's appearance
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
            pupil: two.makeCircle(250 - 100, 250 - 50, 15, 15),
            eyebrow: two.makeCurve(
                170 - 50, 150, // 0 
                170 - 25, 140, // 1
                170, 138, // 2
                170 + 25, 140, // 3
                170 + 50, 150, // 4
                true
            )

        },
        right: {
            draw: two.makeEllipse(250 + 100, 250 - 50, 30, 30),
            pupil: two.makeCircle(250 + 100, 250 - 50, 15, 15),
            eyebrow: two.makeCurve(
                330 - 60, 150, // 0 
                330 - 25, 140, // 1
                330, 138, // 2
                330 + 25, 140, // 3
                330 + 60, 150, // 4
                true
            )

        }
    },
}

// Draws the blob shape + its eyes 

let head = body.head.draw;

let leftEye = two.makeGroup(body.eyes.left.draw, body.eyes.left.pupil, body.eyes.left.eyebrow);
let rightEye = two.makeGroup(body.eyes.right.draw, body.eyes.right.pupil, body.eyes.right.eyebrow);
leftEye.children[1].fill = 'black';
rightEye.children[1].fill = 'black';

let faceGroup = two.makeGroup(head, leftEye, rightEye);
faceGroup.translation.x += 100;
faceGroup.translation.y += 50;
faceGroup.scale = .8;

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

// Animation loop
two.bind('update', function (frameCount) {
    animateEyes();
    animateHead();

}).play();
two.update();