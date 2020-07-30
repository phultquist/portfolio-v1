// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];
let fontsize = 100,
    displayText = "Hello, I'm Patrick",
    tWidth;

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    //   background(51);
    canvas.parent('canvasdiv')
    clear();

    textFont('Georgia') //for some reason, Georgia has very similar width to Avenir Next
    textSize(fontsize);
    tWidth = textWidth(displayText); //note: this is a very rough width
    console.log(tWidth);

    var points = font.textToPoints(displayText, (width - tWidth)/2, 200, fontsize, {
        sampleFactor: 0.25
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    clear();

    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}