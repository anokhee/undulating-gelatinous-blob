var elem = document.getElementById('draw-face');
var two = new Two({
    width: 500,
    height: 500
}).appendTo(elem);

elem.style.border = "1px solid black";

let head = two.makeEllipse(250, 250, 150, 100);
let eyes = two.makeGroup(
    two.makeEllipse(head.translation.x - head.width/2, head.translation.y, 20, 20),
    two.makeEllipse(head.translation.x + head.width/2, head.translation.y, 20, 20),
); 

function getRandomBoolean() {
    var randomNumber = Math.random() >= 0.5;
    return randomNumber;
}

let shouldGrow;


function c(part, attr, min, max){
    if (shouldGrow){
        part[attr]++; 
    }
    else if (!shouldGrow) {
        part[attr]--;
    }

    if (part[attr] <= min){
        shouldGrow = true;
    }
    else if (part[attr] >= max) {
        shouldGrow = false;
    }

}

two.bind('update', function(frameCount) {
    c(head, "width", 150, 400);
    c(head, "height", 150, 400);
}).play();  // Finally, start the animation loop


two.update();