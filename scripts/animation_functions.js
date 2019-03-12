function animateHead() {
    for (i = 0; i <= 12; i++){
        if (i > 0 && i < 12){
            if (i < 6) {
                change(head.vertices[i], "x", parseInt(-250), parseInt(-100), parseInt(1), parseInt(1), body.shouldNotChange);
              } else if (i > 6) {
                change(head.vertices[i], "x", parseInt(100), parseInt(250), parseInt(1), parseInt(1), body.shouldChange);
              }
        } else if (i == 0) {
            change(head.vertices[i], "x", parseInt(-50), parseInt(20), parseInt(1), parseInt(1), body.shouldChange);
        } else if (i == 12) {
            change(head.vertices[i], "x", parseInt(20), parseInt(50), parseInt(1), parseInt(1), body.shouldNotChange);
        }  
    }



    change(head.vertices[1], "y", parseInt(-150), parseInt(-80), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[11], "y", parseInt(-150), parseInt(-80), parseInt(1), parseInt(.5), body.shouldNotChange);
    change(head.vertices[6], "y", parseInt(100), parseInt(230), parseInt(0), parseInt(1), body.shouldChange);

}

function animateEyes() {
    change(leftEye.translation, "x", -50, 50, 0, 1, body.shouldNotChange);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.shouldChange);
    change(rightEye.translation, "x", 0, 70, 0, 1, body.shouldNotChange);
    change(rightEye.translation, "y", -50, 50, 0, 1, body.shouldChange);

    change(leftEye.children[0], "width", 40, 70, 0, .5, body.shouldNotChange);
    change(leftEye.children[0], "height", 40, 70, 0, .5, body.shouldChange);
    change(rightEye.children[0], "width", 40, 70, 0, .5, body.shouldNotChange);
    change(rightEye.children[0], "height", 40, 70, 0, .5, body.shouldChange);


    change(nose.vertices, "width", 40, 70, 0, .5, body.shouldNotChange);
    change(nose.vertices, "height", 40, 70, 0, .5, body.shouldChange);
    change(nose.vertices, "width", 40, 70, 0, .5, body.shouldNotChange);
    change(nose.vertices, "height", 40, 70, 0, .5, body.shouldChange);
}