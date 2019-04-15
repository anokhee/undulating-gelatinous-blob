function animateHead() {
    change(head.vertices[0], "x", parseFloat(-200), parseFloat(0), parseFloat(0), parseFloat(1), body.shouldNotChange);
    change(head.vertices[10], "x", parseFloat(0), parseFloat(200), parseFloat(0), parseFloat(1), body.shouldChange);

    change(head.vertices[1], "x", parseFloat(-250), parseFloat(0), parseFloat(1), parseFloat(1), body.shouldNotChange);
    change(head.vertices[9], "x", parseFloat(0), parseFloat(250), parseFloat(1), parseFloat(1), body.shouldChange);

    change(head.vertices[2], "x", parseFloat(-250), parseFloat(0), parseFloat(1), parseFloat(1), body.shouldNotChange);
    change(head.vertices[8], "x", parseFloat(0), parseFloat(250), parseFloat(1), parseFloat(1), body.shouldChange);

    change(head.vertices[3], "x", parseFloat(-250), parseFloat(0), parseFloat(1), parseFloat(1), body.shouldNotChange);
    change(head.vertices[7], "x", parseFloat(0), parseFloat(250), parseFloat(1), parseFloat(1), body.shouldChange);

    change(head.vertices[4], "x", parseFloat(-250), parseFloat(0), parseFloat(1), parseFloat(1), body.shouldNotChange);
    change(head.vertices[6], "x", parseFloat(0), parseFloat(250), parseFloat(1), parseFloat(1), body.shouldChange);


    change(head.vertices[0], "y", parseFloat(-250), parseFloat(-150), parseFloat(0), parseFloat(.5), body.shouldChange);
    change(head.vertices[10], "y", parseFloat(-250), parseFloat(-150), parseFloat(0), parseFloat(.5), body.shouldNotChange);
    change(head.vertices[5], "y", parseFloat(100), parseFloat(290), parseFloat(0), parseFloat(1), body.shouldChange);

}

function animateEyes () {
    change(leftEye.translation, "x", -50, 50, 0, 1, body.shouldNotChange);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.shouldChange);
    change(rightEye.translation, "x", 0, 70, 0, 1, body.shouldNotChange);
    change(rightEye.translation, "y", -50, 50, 0, 1, body.shouldChange);

    for (i = 0; i <= 4; i++){
        change(leftEye.children[2].vertices[i], "y", -15, 15, 0, .5, body.shouldChange);
        change(rightEye.children[2].vertices[i], "y", -15, 15, 0, .5, body.shouldChange);
    }
}
