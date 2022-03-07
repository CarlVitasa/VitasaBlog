new p5((s) => {

    let x = 100;
    let y = 100;
    let size = 50;

    s.setup = () => {
        s.frameRate(144);
        s.createCanvas(640, 360).parent('sketch2');
    };

    s.draw = () => {
        s.background(0);
        s.fill(50);
        s.noStroke();
        s.circle(s.mouseX, s.mouseY, size);
    };
});
