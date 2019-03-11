function animateHead () {
    change(head.vertices[0], "x", parseInt(-50), parseInt(20), parseInt(1), parseInt(1), body.shouldChange);
    change(head.vertices[12], "x", parseInt(20), parseInt(50), parseInt(1), parseInt(1), body.shouldNotChange);

    change(head.vertices[1], "x", parseInt(-250), parseInt(-100), parseInt(1), parseInt(1), body.shouldChange);
    change(head.vertices[11], "x", parseInt(100), parseInt(250), parseInt(1), parseInt(1), body.shouldNotChange);
   
    change(head.vertices[2], "x", parseInt(-200), parseInt(-100), parseInt(1), parseInt(1), body.shouldChange);
    change(head.vertices[10], "x", parseInt(100), parseInt(250), parseInt(1), parseInt(1), body.shouldNotChange);
    
    change(head.vertices[3], "x", parseInt(-250), parseInt(-100), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[9], "x", parseInt(100), parseInt(250), parseInt(1), parseInt(.5), body.shouldNotChange);

    change(head.vertices[4], "x", parseInt(-250), parseInt(-100), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[8], "x", parseInt(100), parseInt(250), parseInt(1), parseInt(.5), body.shouldNotChange);

    change(head.vertices[5], "x", parseInt(-250), parseInt(-100), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[7], "x", parseInt(100), parseInt(250), parseInt(1), parseInt(.5), body.shouldNotChange);
    
    change(head.vertices[1], "y", parseInt(-250), parseInt(30), parseInt(1), parseInt(.5), body.shouldChange);
    change(head.vertices[11], "y", parseInt(-250), parseInt(30), parseInt(1), parseInt(.5), body.shouldNotChange);

    
    change(head.vertices[6], "y", parseInt(100), parseInt(210), parseInt(0), parseInt(1), body.shouldChange);
}

function animateEyes () {
    change(leftEye.translation, "x", -50, 50, 0, 1, body.shouldNotChange);
    change(leftEye.translation, "y", -50, 50, 0, 1, body.shouldChange);
    change(rightEye.translation, "x", 0, 70, 0, 1, body.shouldNotChange);
    change(rightEye.translation, "y", -50, 50, 0, 1, body.shouldChange); 

    change(leftEye.children[0], "width", 30, 70, 0, .5, body.shouldNotChange);
    change(leftEye.children[0], "height", 30, 70, 0, .5, body.shouldChange);
    change(rightEye.children[0], "width", 30, 70, 0, .5, body.shouldNotChange);
    change(rightEye.children[0], "height", 30, 70, 0, .5, body.shouldChange); 
}