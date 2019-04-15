var elem = document.getElementById('draw-face');
var params = {
    width: 1000,
    height: 600
};
var two = new Two(params).appendTo(elem);

elem.style.border = '1px solid #ccc';

function getRandomBoolean() {
    var randomNumber = Math.random() >= 0.5;
    return randomNumber;
}

var body = {
    shouldChange: true,
    shouldNotChange: false,
    head: {
        draw: two.makeCurve(
            230, 50, // 0
            50, 100, // 1
      
            100, 300, // 3
            140, 365, // 4
            180, 430, // 5
            250, 450, // 6
            320, 430, // 7
            360, 365, // 8
            400, 300, // 9
          
            450, 100, // 11
            280, 50, //12
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
        },
    },
}


let head = body.head.draw;

let leftEye = two.makeGroup(body.eyes.left.draw, body.eyes.left.pupil, body.eyes.left.eyebrow);
let rightEye = two.makeGroup(body.eyes.right.draw, body.eyes.right.pupil, body.eyes.right.eyebrow);
let faceGroup = two.makeGroup(head, leftEye, rightEye);

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

faceGroup.translation.x += 300;
faceGroup.translation.y += 50;

two.bind('update', function (frameCount) {
    animateHead();
    animateEyes();
}).play();


two.update();