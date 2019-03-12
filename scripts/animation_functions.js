function animateHead() {
    for (i = 0; i <= 12; i++){
        if (i > 0 && i < 12){
            if (i < 6) {
                change(head.vertices[i], "x", parseFloat(-250), parseFloat(-100), parseFloat(1), parseFloat(1), body.shouldNotChange);
              } else if (i > 6) {
                change(head.vertices[i], "x", parseFloat(100), parseFloat(250), parseFloat(1), parseFloat(1), body.shouldChange);
              }
        } else if (i == 0) {
            change(head.vertices[i], "x", parseFloat(-50), parseFloat(20), parseFloat(1), parseFloat(1), body.shouldChange);
        } else if (i == 12) {
            change(head.vertices[i], "x", parseFloat(20), parseFloat(50), parseFloat(1), parseFloat(1), body.shouldNotChange);
        }  
    }

    change(head.vertices[1], "y", parseFloat(-150), parseFloat(-80), parseFloat(1), parseFloat(.5), body.shouldChange);
    change(head.vertices[11], "y", parseFloat(-150), parseFloat(-80), parseFloat(1), parseFloat(.5), body.shouldNotChange);
    change(head.vertices[6], "y", parseFloat(100), parseFloat(230), parseFloat(0), parseFloat(1), body.shouldChange);

}

function animateEyes () {
    change(leftEye.translation, "x", -50, 50, 0, 1, body.shouldNotChange);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.shouldChange);
    change(rightEye.translation, "x", 0, 70, 0, 1, body.shouldNotChange);
    change(rightEye.translation, "y", -50, 50, 0, 1, body.shouldChange);

    change(leftEye.children[0], "width", 40, 70, 0, .5, body.shouldNotChange);
    change(leftEye.children[0], "height", 40, 70, 0, .5, body.shouldChange);
    change(rightEye.children[0], "width", 40, 70, 0, .5, body.shouldNotChange);
    change(rightEye.children[0], "height", 40, 70, 0, .5, body.shouldChange);

    for (i = 0; i <= 4; i++){
        change(leftEye.children[2].vertices[i], "y", -15, 15, 0, .5, body.shouldChange);
        change(rightEye.children[2].vertices[i], "y", -15, 15, 0, .5, body.shouldChange);
    }
}

function animateNose () {
    for (i = 0; i <= 4; i++){
        
        if (i < 2){
            change(mouth.vertices[i], "y", -20, 0, 0, .5, body.shouldChange);
        } else if (i > 2) {
            change(mouth.vertices[i], "y", 0, 20, 0, .5, body.shouldChange);
        }
    }
}