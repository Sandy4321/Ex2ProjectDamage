
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorWhite = "#ffffff";

var curColor = colorPurple;
var clickColor = new Array();


$("#Dent").click(function(e){
 
curColor_simpleColors = colorGreen;
 
});

$("#Paint").click(function(e){
 
curColor_simpleColors = colorPurple;
  
});

$("#Scratch").click(function(e){

curColor_simpleColors = colorYellow;
  
});

$("#Erase").click(function(e){

curColor_simpleColors = colorWhite;

});





var canvas = document.getElementById("canvasRightSide");
      if (canvas.getContext) {
        var context = canvas.getContext("2d");
    }

  $("#canvasRightSide").mousedown(function(e){
    console.log("Down")
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
  console.log(mouseX)
  console.log(mouseY)
    
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
  drawCarRightSide();
});

  $('#canvasRightSide').mouseup(function(e){
  paint = false;
});

  $('#canvasRightSide').mouseleave(function(e){
  paint = false;
});

  var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  console.log("Hi click")
  clickX.push(x);
  clickY.push(y);
  clickColor.push(curColor_simpleColors);

}

function redraw(){
  //context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
 // context.strokeStyle = "#ffff30";
  context.lineJoin = "round";
  context.lineWidth = 40;
      
  for(var i=0; i < clickX.length; i++) {    
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.stroke();

  }
}