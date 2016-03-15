


function drawCarRightSide() {
  context.lineWidth = 2;
      var canvas = document.getElementById("canvasRightSide");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        
     ctx.beginPath();
     ctx.strokeStyle = 'green';
ctx.moveTo(190,10);
ctx.lineTo(410,10);


ctx.moveTo(190,10);
ctx.lineTo(110,120);


ctx.moveTo(410,10);
ctx.lineTo(490,120);


ctx.moveTo(600,120);
ctx.lineTo(30,120);


ctx.moveTo(300,10);
ctx.lineTo(300,120);
ctx.stroke();


//Right Curve
ctx.moveTo(600,120);
ctx.quadraticCurveTo(650,160,650,250);
ctx.stroke();

//Left Curve
ctx.moveTo(30,120);
ctx.quadraticCurveTo(0,200,0,250);
ctx.stroke();


//Left Tyre
ctx.moveTo(185,250);
    ctx.arc(120,250,65,0,Math.PI*2,true);
    ctx.stroke();

    ctx.moveTo(175,250);
    ctx.arc(120,250,55,0,Math.PI*2,true);
    ctx.stroke();


//Right Tyre
ctx.moveTo(535,250);
 ctx.arc(470,250,65,0,Math.PI*2,true);
 ctx.stroke();

ctx.moveTo(525,250);
 ctx.arc(470,250,55,0,Math.PI*2,true);
 ctx.stroke();

 ctx.moveTo(300,10);
ctx.lineTo(300,250);
ctx.stroke();

ctx.moveTo(55,250);
ctx.lineTo(0,250);
ctx.stroke();


ctx.moveTo(405,250);
ctx.lineTo(185,250);
ctx.stroke();

ctx.moveTo(535,250);
ctx.lineTo(650,250);
ctx.stroke();




      }
    }





