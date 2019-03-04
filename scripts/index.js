var elem = document.getElementById('draw-face');
var two = new Two({
    width: 500,
    height: 500
}).appendTo(elem);

elem.style.border = "1px solid black";


function getRandomBoolean() {
    var randomNumber = Math.random() >= 0.5;
    return randomNumber;
}

var body = {
    head: {
        x: 250,
        y: 250, 
        width: 150, 
        height: 150,
        shouldChangeWidth: true,
        shouldChangeHeight: false,
        draw: two.makeEllipse(250, 250, 150, 150)
    }
}

function change(part, attr, min, max, deltaMin, deltaMax, x){
    let delta = Math.random() * (deltaMax - deltaMin) + deltaMin;

    if (part[x]){
        part[attr] += delta; 
    }

    else if (!part[x]) {
        part[attr] -= delta;
    }

    if (part[attr] <= min){
        part[x] = true;
    }
    else if (part[attr] >= max) {
        part[x] = false;
    }
}

two.bind('update', function(frameCount) {
    change(body.head.draw, "width", 250, 450, 1, .5, body.head.shouldChangeWidth);
    change(body.head.draw, "height", 250, 450, 4, .5, body.head.shouldChangeHeight);
    
}).play();  // Finally, start the animation loop


two.update();