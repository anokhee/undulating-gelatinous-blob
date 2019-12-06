function animateHead() {
    for (i = 0; i <= 12; i++) {
        if (i > 0 && i < 12) {
            if (i < 6) {
                change(head.vertices[i], "x", parseFloat(-250), parseFloat(-100), parseFloat(1), parseFloat(1), body.shouldNotChange);
            } else if (i > 6) {
                change(head.vertices[i], "x", parseFloat(100), parseFloat(250), parseFloat(1), parseFloat(1), body.shouldChange);
            }
        } else if (i == 0) {
            change(head.vertices[i], "x", parseFloat(-30), parseFloat(20), parseFloat(1), parseFloat(1), body.shouldChange);
        } else if (i == 12) {
            change(head.vertices[i], "x", parseFloat(30), parseFloat(50), parseFloat(1), parseFloat(1), body.shouldNotChange);
        }
    }


    change(head.vertices[0], "y", parseFloat(-250), parseFloat(-100), parseFloat(0), parseFloat(.5), body.shouldChange);
    change(head.vertices[1], "y", parseFloat(-250), parseFloat(-100), parseFloat(0), parseFloat(.5), body.shouldChange);
    change(head.vertices[11], "y", parseFloat(-250), parseFloat(-100), parseFloat(0), parseFloat(.5), body.shouldNotChange);
    change(head.vertices[6], "y", parseFloat(100), parseFloat(230), parseFloat(0), parseFloat(1), body.shouldChange);

}

function animateEyes() {
    change(leftEye.translation, "x", -50, 50, 0, 1, body.shouldNotChange);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.shouldChange);
    change(rightEye.translation, "x", 0, 70, 0, 1, body.shouldNotChange);
    change(rightEye.translation, "y", -50, 50, 0, 1, body.shouldChange);

    for (i = 0; i <= 4; i++) {
        change(leftEye.children[2].vertices[i], "y", -15, 15, 0, .5, body.shouldChange);
        change(rightEye.children[2].vertices[i], "y", -15, 15, 0, .5, body.shouldChange);
    }
}