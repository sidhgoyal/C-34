var ball;
var database;
var pos;
function setup(){
    createCanvas(500,500);
     
    database = firebase.database(); 

    var posref = database.ref('ball/position');
    posref.on("value",readpos);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if (pos!==undefined) {
        if(keyDown(LEFT_ARROW)){
        writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        
        writePosition(0,+3);
    }
    }
    
    drawSprites();
}

function writePosition(x,y){
    console.log(pos);
    database.ref('ball/position').set({
        x:pos.x+x,
        y:pos.y+y
    });
    
}

function readpos(storage){
    pos = storage.val();
    ball.x = pos.x;
    ball.y = pos.y;
}
