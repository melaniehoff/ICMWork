// VARIABLES

var colourx = [];
var coloury = [];
var colourz = [];


function setup() {
  createCanvas(500, 500);
  /* Use for static colours
  COMMENT HERE IF YOU WANT DYNAMIC COLOURS*/
  //setColours();

}

function getPoints(xc, yc) {
  for (var i = 0; i < count; i++) {
    xarr[i] = xc + (rad * sin((2 * (22 / 7) * i) / count));
    yarr[i] = yc + (rad * cos((2 * (22 / 7) * i) / count));
    point(xarr[i], yarr[i]);
  }
}

function setColours() {
  for (var i = 0; i < 50; i++) {

    colourx[i] = random() * 255;
    coloury[i] = random() * 255;
    colourz[i] = random() * 255;

  }
}

function draw() {

  //lines();
  triangles();
  //squares();
}


function triangles() {
  var xc = 250;
  var yc = 250;
  var count = 20;

  var rad = 150; 
  var xarr = [];
  var yarr = [];
  /*
    Use for dynamic colours
  */
    var colourx = [];
    var coloury = [];
    var colourz = [];
    

  fill(250, 0, 50);
  rect(0,0,500,500);
  for (var i = 0; i < count; i++) {
    xarr[i] = xc + (rad * sin((2 * (22 / 7) * i) / count));
    yarr[i] = yc + (rad * cos((2 * (22 / 7) * i) / count));
    point(xarr[i], yarr[i]);
    /* 
      Use for dynamic colours 
    */
      colourx[i] = random()*255;
      coloury[i] = random()*255;
      colourz[i] = random()*255;
      
  }
  for (var i = 0; i < count; i++) {
    for (var j = 0; j < count; j++) {
      for (var k = 0; k < count; k++) {
        //fill(255 / 16 * i, 255 / 16 * k, 255 / 16 * j);
        fill(colourx[k],coloury[j],colourz[k])
        triangle(xarr[i], yarr[i], xarr[j], yarr[j], xarr[k], yarr[k]);
      }
    }
  }
}
