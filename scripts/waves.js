var elem = document.getElementById('draw-waves');
var params = {
    width: 485,
    height: 485
};
var two = new Two(params).appendTo(elem);

let stars = two.makeGroup();

for (i = 0; i < 100; i++) {
    stars.add(two.makeCircle(Math.random() * 485, Math.random() * 390, .8));
    stars.children[i].opacity = .8;

}

stars.fill = 'white';
stars.stroke = 'none';

let background = two.makeGroup();

stars2 = stars.clone();

for (i = 0; i < stars2.children.length; i++){
    stars2.children[i].scale = 5;
}

stars2.opacity = .01;





for (i = 0; i < two.height/2; i++){
    background.add(two.makeRectangle(
        two.width/2, two.height - i * 50, two.width, 50
    ));
}

background.stroke = 'none';
background.fill = '#ef582b';

for (i = 0; i < background.children.length; i++){
    background.children[i].opacity = 1 - i * .05;
}

let moon = two.makeGroup(
    two.makeCircle(292.5, 340, 50),
    two.makeCircle(292.5, 340, 100),
    two.makeCircle(292.5, 340, 130),
);

let slurp = two.makeGroup();
let foam = two.makeGroup();
let waves = two.makeGroup();

moon.stroke = 'none';
moon.children[0].fill = '#fff687';
moon.children[0].opacity = 1;
moon.children[1].fill = '#ffe576';
moon.children[1].opacity = .2;
moon.children[2].fill = '#ffe576';
moon.children[2].opacity = .05;

elem.style.border = '1px solid #ccc';
elem.style.backgroundColor = '#520436';


for (i = 0; i < 40; i++) {
    waves.add(
        two.makeRectangle(0 + i * 20, 485, 40, 50)
    )
    foam.add(
        two.makeRectangle(0 + i * 20, 485, 40, 200)
    )
    slurp.add(
        two.makeRectangle(0 + i * 20, 485, 40, 350)
    )
}

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


waves.stroke = 'none';
waves.fill = '#3e042d';

foam.stroke = 'none';
foam.fill = '#73153a';

slurp.stroke = 'none';
slurp.fill = '#a03a62';

let q = [];
let r = [];

let tempMin = Math.random() * (180 - 160) + 160;
let tempMax = 200;

function makeWaves() {
    var random_boolean = Math.random() >= .5;

    q.push(tempMin);
    r.push(tempMax);

    for (i = 0; i < waves.children.length; i++) {
        change(waves.children[i], "height", q[q.length - 1] - 1, r[r.length - 1] + 1, .85, 1, random_boolean)
        change(foam.children[i], "height", q[q.length - 1] + 40, r[r.length - 1] + 40, .55, .7, random_boolean)
        change(slurp.children[i], "height", q[q.length - 1] + 80, r[r.length - 1] + 80, .45, .65, random_boolean)
    }
}



two.bind('update', function (frameCount) {
    var random_boolean = Math.random() >= .5;
    makeWaves();
    change(moon.children[2], "scale", .9, 1.1, .0010, .0015, random_boolean);
    change(moon.children[1], "scale", .8, .9, .0012, .0017, random_boolean);
}).play();

two.update();