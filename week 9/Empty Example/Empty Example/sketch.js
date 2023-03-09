function setup() { 

    createCanvas(windowWidth, windowHeight);
    
}

function draw() {

    background(222);
    
    for(let i = 0; i < 14; i++ ){  
        fill("white")
        rect(100 + 100 * i, 100, 100, 500, 0, 0, 20, 20);
    }
    
    for(let i = 0; i < 2; i++ ){
        fill("black");
        rect(175 + 700 * i, 100, 50, 350, 0, 0, 15, 15);  
        rect(275 + 700 * i, 100, 50, 350, 0, 0, 15, 15);  
        rect(475 + 700 * i, 100, 50, 350, 0, 0, 15, 15);  
        rect(575 + 700 * i, 100, 50, 350, 0, 0, 15, 15);  
        rect(675 + 700 * i, 100, 50, 350, 0, 0, 15, 15);  
        
    }
      

}
