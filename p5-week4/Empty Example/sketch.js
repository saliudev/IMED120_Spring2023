
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
   
}

function draw() {
    // put drawing code here
    background(222);
    // x,y,w,h rect
     noStroke();
    //Denmark Flag
    
    //top and bottom left square
    fill('red');
    rect(80, 70, 100, 100);
    rect(80, 200, 100, 100);
    
    //horizontal line
    fill('white');
    rect(80, 170, 300, 40);
    
    //top and bottom right square
    fill('red');
    rect(220, 70, 160, 100);
    rect(220, 210, 160, 90);
    
    //vertical line
    fill('white');
    rect(180, 70, 40, 230);
    
    //text Denmark
    textSize(32);
    fill('black')
    text('Denmark', 80, 400);
    
    //Congo Flag
    noStroke();
    //triangle(x1, y1, x2, y2, x3, y3)
    fill('green');
    //Left triangle
    triangle(480, 100, 480, 250, 680, 100);
    
    //quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY])
    fill('yellow');
    //middle part
    quad(480, 250, 580, 250, 780, 100, 680, 100);
    
    
    //Right Triangle
    fill('red');
    //triangle(x1, y1, x2, y2, x3, y3)
    triangle(780, 100, 580, 250, 780, 250);
    
    //text Congo
    fill('black');
    textSize(32);
    text('Congo', 480, 400);
 
       
}