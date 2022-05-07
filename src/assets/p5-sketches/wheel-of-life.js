new p5((s) => {
    const COLORS = ['#FF004D', '#00E436', '#FFEC27', '#29ADFF', '#FFA300', '#7E2553', '#FF77A8', '#AB5236', '#FFCCAA', '#83769C'];
    const BG_COLOR = '#1D2B53';
    const LEVELS_OUTLINE_COLOR = '#C2C3C7';
    const CANVAS_WIDTH = 640;
    const CANVAS_HEIGHT = 360;
    const MAX_LENGTH = CANVAS_HEIGHT - CANVAS_HEIGHT / 4;
    const MAX_LEVEL = 5;
    const INCREMENT = MAX_LENGTH / MAX_LEVEL;
    const PIE_POS_X = (CANVAS_WIDTH / 3) * 2;
    const PIE_POS_Y = 10 + CANVAS_HEIGHT / 2;

    let angles = [];
    let radiusesLength = [];
    let radiuses = [];
    let slices = radiuses.length;
    let sliders = [];
    let showOutlines = false;
    let renderText = false;
    let title;

    const STARTING_Y = 40;
    let currentY = STARTING_Y;

    const INCREMENT_Y = 24;
    let maxLevel = 10;
    const MAX_Y = STARTING_Y + INCREMENT_Y * maxLevel;

    s.setup = () => {
        let canvas = s.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent('wheel');

        addButton = s.createButton('Add').parent('wheel');
        addButton.position(10, 10);
        addButton.mousePressed(addSlider);

        removeButton = s.createButton('Remove').parent('wheel');
        removeButton.position(60, 10);
        removeButton.mousePressed(removeSlider);

        toggleOutlinesButton = s.createButton('Outlines').parent('wheel');
        toggleOutlinesButton.position(135, 10);
        toggleOutlinesButton.mousePressed(() => {
            showOutlines = !showOutlines;
        });

        takeScreenshotButton = s.createButton('Screenshot').parent('wheel');
        takeScreenshotButton.position(210, 10);
        takeScreenshotButton.mousePressed(() => {
            renderText = true;
        });

        // Header
        title = s.createInput('The Wheel of Life: Current')
            .attribute('placeholder', 'Title... ').parent('wheel');
        title.position(305, 10);
        title.size(200);
    };

    s.draw = () => {
        s.background(BG_COLOR);
        pieChart();

        // levels outline
        if (showOutlines) {
            for (let i = 1; i < MAX_LEVEL + 1; i++) {
                s.stroke(LEVELS_OUTLINE_COLOR)
                s.noFill();
                s.circle(PIE_POS_X, PIE_POS_Y, i * INCREMENT);
            }
        }

        if (sliders.length != 0) {
            for (let i = 0; i < radiuses.length; i++) {
                radiuses[i] = sliders[i].slider.value() + 1;
                sliders[i].draw(COLORS[i]);


                if (i == radiuses.length - 1 && renderText) {
                    s.textSize(18);
                    s.textAlign(s.LEFT, s.TOP);
                    s.fill(255);
                    s.text(title.value(), 10, 10);

                    s.saveCanvas(s.canvas, "wheel-of-life", "png");

                    renderText = false;
                }
            }
        }
    };

    function pieChart() {
        slices = radiuses.length;

        for (let i = 0; i < slices; i++) {
            radiusesLength[i] = radiuses[i] * INCREMENT;
        }

        for (let i = 0; i < slices; i++) {
            angles[i] = 360 / slices;
        }

        let lastAngle = 0;
        let lastLength = radiusesLength[0];

        for (let i = 0; i < angles.length; i++) {
            lastLength = radiusesLength[i];

            s.fill(COLORS[i]);
            s.noStroke();
            if (lastLength == null) { return; }
            s.arc(
                PIE_POS_X,
                PIE_POS_Y,
                lastLength,
                lastLength,
                lastAngle,
                lastAngle + s.radians(angles[i])
            );
            lastAngle += s.radians(angles[i]);
        }
    }

    function addSlider() {
        if (currentY === MAX_Y) { return; }
        sliders.push(new Category(10, currentY));
        currentY += INCREMENT_Y;

        radiuses.push(1);
    }

    function removeSlider() {
        if (currentY === STARTING_Y) { return; }
        sliders[sliders.length - 1].slider.remove();
        sliders[sliders.length - 1].input.remove();
        sliders.pop();
        currentY -= INCREMENT_Y;

        radiuses.pop();
        radiusesLength.pop();
    }

    class Category {

        constructor(newX, newY) {
            this.x = newX;
            this.y = newY;
            this.slider = s.createSlider(0, MAX_LEVEL - 1, MAX_LEVEL).parent('wheel');
            this.slider.position(newX + 105, newY);
            this.slider.style('width', '80px');

            this.input = s.createInput('').parent('wheel');
            this.input.position(newX + 22, newY);
            this.input.size(70);
        }

        draw(colorIndicator) {
            let size = 15;
            s.fill(colorIndicator);
            s.noStroke();
            s.ellipse(this.x + INCREMENT_Y / 2, this.y + INCREMENT_Y / 2, size);

            if (!renderText) { return; }
            s.textSize(18);
            s.textAlign(s.LEFT, s.TOP);
            s.fill(255);
            s.text(this.input.value(), this.x + 22, this.y);
        }
    }
});
