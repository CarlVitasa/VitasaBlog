new p5((s) => {
    const CANVAS_WIDTH = 640;
    const CANVAS_HEIGHT = 360;
    const MAX_TREE_HEIGHT = 175;
    const MAX_TREE_ANGLE = 30;
    const MAX_BRANCH_LENGTH = 10;

    s.setup = () => {
        s.frameRate(144);
        s.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent('sketch1');
        s.angleMode(s.DEGREES);
    };

    s.draw = () => {
        s.background(0);
        s.translate(s.width * 0.5, s.height);

        let mouseInputY = s.constrain(s.mouseY, 0, CANVAS_HEIGHT);
        let length = remap(mouseInputY, 0, CANVAS_HEIGHT, MAX_TREE_HEIGHT, 0);
        let mouseInputX = s.constrain(s.mouseX, 0, CANVAS_WIDTH * 0.5);
        let angle = remap(mouseInputX, 0, CANVAS_WIDTH * 0.5, 0, MAX_TREE_ANGLE);

        branch(length * 0.5, angle);
    };

    function branch(len, ang) {
        s.push();
        if (len > MAX_BRANCH_LENGTH) {
            s.strokeWeight(s.map(len, 10, 100, 1, 15));
            s.stroke(255);
            s.line(0, 0, 0, -len);
            s.translate(0, -len);
            s.rotate(ang);
            branch(len * 0.75, ang);
            s.rotate(-ang * 2);
            branch(len * 0.75, ang);
        }
        s.pop();
    }

    function remap(oldValue, oldMin, oldMax, newMin, newMax) {
        let oldRange = (oldMax - oldMin);
        let newRange = (newMax - newMin);
        return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
    }
});
