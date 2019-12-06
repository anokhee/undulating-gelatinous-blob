var colors = [
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // 0
    `rgb(${Math.random() * 190}, ${Math.random() * 190}, ${Math.random() * 190})`, // 1
    `rgb(255, 201, 229`, // 2
    `rgb(204, 183, 144)`, // 3
]

var bodyGradient = two.makeLinearGradient(
    -two.width / 3, - two.height / 3,
    two.width / 3, two.height / 3,
    new Two.Stop(0, colors[0]), 
    new Two.Stop(1, colors[1])
);

var eyesGradient = two.makeLinearGradient(
    -leftEye.children[0].width / 5, - leftEye.children[0].height / 5,
    leftEye.children[0].width / 5, leftEye.children[0].height / 5,
    new Two.Stop(0, colors[2]), 
    new Two.Stop(1, colors[3])
);