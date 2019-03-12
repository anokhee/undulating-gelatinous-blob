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
            pupil: two.makeCircle(250 + 100, 250 - 50, 5, 5),
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
    // nose: {
    //     draw: two.makePolygon(250, 250, 15, 3)
    // }, 
    // mouth: {
    //     draw: two.makeCurve(
    //         250 - 50, 355, // 0
    //         250 - 25, 370, // 1
    //         250, 375, // 2
    //         250 + 25, 370, // 3
    //         250 + 50, 355, // 4
    //         true)
    // }
}

let head = body.head.draw;
head.linewidth = 20;
head.fill = '#B3B3F1';
head.stroke = '#CEC2FF';

let leftEye = two.makeGroup(body.eyes.left.draw, body.eyes.left.pupil, body.eyes.left.eyebrow);
let rightEye = two.makeGroup(body.eyes.right.draw, body.eyes.right.pupil, body.eyes.right.eyebrow);

leftEye.linewidth = 10;
rightEye.linewidth = 10;
leftEye.children[1].fill = 'black';
rightEye.children[1].fill = 'black';
leftEye.children[2].fill = 'none';
rightEye.children[2].fill = 'none';
leftEye.children[2].linewidth = 30;
rightEye.children[2].linewidth = 30;

// let nose = body.nose.draw; 
// nose.fill = 'pink'; 
// nose.stroke = 'black';
// nose.linewidth = 10;

// let mouth = body.mouth.draw;
// mouth.fill = 'none'
// mouth.linewidth = 10;



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
    // animateNose();
}).play();


two.update();