new p5((p5) => {
    const MAX_TREE_HEIGHT = 175;
    const MAX_TREE_ANGLE = 25;
    const MAX_BRANCH_LENGTH = 10;

    p5.setup = () => {
        p5.frameRate(144);
        p5.createCanvas(640, 360).parent('fractal-tree');
        p5.angleMode(p5.DEGREES);
    };

    p5.draw = () => {
        p5.background(0);
        p5.translate(p5.width * 0.5, p5.height);

        let mouseInputY = p5.constrain(p5.mouseY, 0, p5.height);
        let length = remap(mouseInputY, 0, p5.height, MAX_TREE_HEIGHT, 0);
        let angle = remap(mouseInputY, 0, p5.height, MAX_TREE_ANGLE, 5);

        branch(length * 0.5, angle);
    };

    function branch(len, ang) {
        p5.push();
        if (len > MAX_BRANCH_LENGTH) {
            p5.strokeWeight(p5.map(len, 10, 100, 1, 15));
            p5.stroke(255);
            p5.line(0, 0, 0, -len);
            p5.translate(0, -len);
            p5.rotate(ang);
            branch(len * 0.75, ang);
            p5.rotate(-ang * 2);
            branch(len * 0.75, ang);
        }
        p5.pop();
    }

    function remap(oldValue, oldMin, oldMax, newMin, newMax) {
        let oldRange = (oldMax - oldMin);
        let newRange = (newMax - newMin);
        return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
    }
});

