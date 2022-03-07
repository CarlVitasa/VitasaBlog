const sketch1 = (s) => {

    let x = 100;
    let y = 100;
    let size = 50;
    let c = 0;

    s.setup = () => {
        s.createCanvas(640, 360).parent('sketch');
        s.background(0);
    };

    s.draw = () => {
        if (s.mouseIsPressed) { c = s.random(255); }
        s.fill(c);
        s.noStroke();
        s.circle(s.mouseX, s.mouseY, size);
    };
};

let box1 = new p5(sketch1);
