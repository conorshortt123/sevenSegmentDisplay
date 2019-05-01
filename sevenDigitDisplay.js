let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B,];
let index = 0;

function setup() {
  createCanvas(400, 350);
  frameRate(1);
  //Sets refresh rate of the draw function.
}

function draw() {
  background(0);
  sevenSegment(nums[index]);
  if(index < nums.length){
     index++;
  } else {
    index = 0;
  }
  //Index can't exceed the length of the array. If it does it is reset to 0.
}

//Get colour function. Get's the colour of the segment.
function getColour(val, shift){
  let r = 0;
  let g = 255;
  let b = 0;
  //The colour of the segment is 255, and is then multiplied by the shift of the binary digit which will either be 0 or 1.
  //255 * 0 will be 0. And therefore the segment will not be coloured. Or if the binary digit is 1 then 255 * 1 = 255 and it will be green. 
  let a = 255 * ((val >> shift) & 1);
  return color(r,g,b,a);
}

function sevenSegment(val) {
  push();
  stroke(0);
  noFill();
  //X Y WIDTH HEIGHT
  //A
  fill(getColour(val, 6));
  rect(130, 30, 100, 20);
  //B
  fill(getColour(val, 5));
  rect(235, 55, 20, 100);
  //C
  fill(getColour(val, 4));
  rect(235, 180, 20, 100);
  //D
  fill(getColour(val, 3));
  rect(130, 285, 100, 20);
  //E
  fill(getColour(val, 2));
  rect(105, 180, 20, 100);
  //F
  fill(getColour(val, 1));
  rect(105, 55, 20, 100);
  //G
  fill(getColour(val, 0));
  rect(130, 157, 100, 20);
  
  pop();
}
