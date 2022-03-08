new p5((s) => {
    let size = 50;

    s.setup = () => {
        s.frameRate(144);
        s.createCanvas(640, 360).parent('sketch1');
    };

    s.draw = () => {
        s.background(0);
        s.fill(255);
        s.noStroke();
        s.circle(s.mouseX, s.mouseY, size);
    };
});
