new p5((p5) => {
    const COLORS = ['#1D2B53', '#29ADFF'];
    const PADDING = 15;
    const AMPLITUDE = 20;
    const SMOOTHNESS = 40;
    const SPEED = 0.4;
    let time = 0;

    p5.setup = () => {
        p5.frameRate(144);
        p5.createCanvas(640, 360).parent('sine-pulse');
    };

    p5.draw = () => {
        p5.background(COLORS[0]);

        time += p5.deltaTime / 100;

        for (let x = -p5.width / 2; x < p5.width / 2; x += PADDING) {
            for (let y = -p5.height / 2; y < p5.height / 2; y += PADDING) {

                let d = p5.sqrt(x * x + y * y);
                let z = p5.sin(d / SMOOTHNESS - time * SPEED) * AMPLITUDE;

                p5.noStroke();
                p5.fill(COLORS[1])
                p5.ellipse(x + p5.width / 2, (y + p5.height / 2) - z, 8);
            }
        }
    };
});
