// 2D Noise
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/noise/0.5-2d-noise.html
// https://youtu.be/ikwNrFvnL3g
// https://editor.p5js.org/codingtrain/sketches/2_hBcOBrF

// This example has been updated to use es6 syntax. To learn more about es6 visit: https://thecodingtrain.com/Tutorials/16-javascript-es6

let inc = 0.1/2;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];
const nParticle = 500 ;
var flowfield ; 

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP("")
  flowfield = new Array(cols*rows);

  for (let i=0;i<nParticle;i++) {
      particles[i] = new Particle();
  }

  background(255);
}

function draw() {
  let yoff = 0;
  // loadPixels(); // no pixel for this demo
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      // let r = random(255);
      let angle = perlin_noise(xoff, yoff, zoff ) * TWO_PI *4 ; // *4 is to provide more randomness
      var v = p5.Vector.fromAngle(angle); // horizontal right 
      v.setMag(1);
      flowfield[index] = v;

      xoff += inc;

      // fill(r);
      // rect(x*scl, y*scl, scl, scl);
      stroke(0, 50); // alpha 50
      strokeWeight(1); 
      // push();
      // translate( x*scl, y*scl ) ; // move to grid left-bottom corner
      // rotate( v.heading() ); // rotate 
      // // draw vector line
      // line(0,0, scl, 0); // draw   horizontal line
      // pop();

    }
    yoff += inc;

  }
  zoff += 0.003;
  // updatePixels();
  //noLoop();
  
  for (let i=0;i<particles.length;i++) {
    particles[i].follow( flowfield );
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  fr.html( floor(frameRate()));
}

