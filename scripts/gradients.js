var colors = [
    'rgb(60, 14, 171)',
    'rgb(232, 208, 197)',
    'rgb(255, 201, 229',
    'rgb(204, 183, 144)',
    'rgb(255, 253, 249)',
    'rgb(0, 0, 0)',
    'rgb(50, 50, 50)'
]

var bodyGradient = two.makeLinearGradient(
    - two.width / 3, - two.height / 3,
    two.width / 3, two.height / 3,
    new Two.Stop(0, colors[0]), 
    new Two.Stop(1, colors[1])
);

var eyesGradient = two.makeLinearGradient(
    - leftEye.children[0].width / 5, - leftEye.children[0].height / 5,
    leftEye.children[0].width / 5, leftEye.children[0].height / 5,
    new Two.Stop(0, colors[2]), 
    new Two.Stop(1, colors[3])
);