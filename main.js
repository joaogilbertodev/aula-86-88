var canvas =new fabric.Canvas("myCanvas");

var blockWidth=30;
var blockHeight=30;

var playerX=10;
var playerY=10;

var playerObj="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function (Img) {
        playerObj=Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObj)
    })
}

function newImage(getImg){
    fabric.Image.fromURL(getImg, function (Img) {
        blockObj=Img;
        blockObj.scaleToWidth(blockWidth);
        blockObj.scaleToHeight(blockHeight);
        blockObj.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockObj)
    })
}
// &&-and || -ou
window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    if (e.shiftKey==true && keyPressed=="80") {
        blockWidth=blockWidth+10;
        blockHeight=blockHeight+10;
        document.getElementById("Largura").innerHTML=blockWidth;
        document.getElementById("Altura").innerHTML=blockHeight;
    }
    if (e.shiftKey==true && keyPressed=="77") {
        blockWidth=blockWidth-10;
        blockHeight=blockHeight-10;
        document.getElementById("Largura").innerHTML=blockWidth;
        document.getElementById("Altura").innerHTML=blockHeight;
    }
    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="39") {
        right()
    }
    if (keyPressed=="40") {
        down()
    }

    if (keyPressed=="67") {
        newImage("cloud.jpg")
    }
    if (keyPressed=="68") {
        newImage("dark_green.png")
    }
    if (keyPressed=="71") {
        newImage("ground.png")
    }
    if (keyPressed=="76") {
        newImage("light_green.png")
    }
    if (keyPressed=="82") {
        newImage("roof.jpg")
    }
    if (keyPressed=="84") {
        newImage("trunk.jpg")
    }if (keyPressed=="85") {
        newImage("unique.png")
    }
    if (keyPressed=="87") {
        newImage("wall.jpg")
    }
    if (keyPressed=="89") {
        newImage("yellow_wall.png")
    }
}