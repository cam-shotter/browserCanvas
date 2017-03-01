var canvas,
    ctx,
    isDrawing = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0;

var x = "black",
    y = 2;

var brushType = "Pencil";

function init() {
  canvas = document.getElementById('drawingArea');
  ctx = canvas.getContext("2d");
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight - 77;



  canvas.onmousedown = function(e) {
    getMouseCoordinates(e)
    isDrawing = true;
  }
  canvas.onmouseup = function(e) {
    isDrawing = false;
  }
  canvas.onmousemove = function(e) {
    if (isDrawing) {
        getMouseCoordinates(e)
        draw();
    }
  }
}

function getMouseCoordinates(e) {
  prevX = currX;
  prevY = currY;
  currX = e.clientX - canvas.offsetLeft;
  currY = e.clientY - canvas.offsetTop;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.lineJoin = ctx.lineCap = "round";
    ctx.shadowColor = ctx.shadowBlur = null;
    if(brushType == "Pencil") {
      ctx.strokeStyle = x;
      ctx.lineWidth = y;
      ctx.stroke();
    } else if (brushType == "Spray Paint") {
      ctx.strokeStyle = ctx.shadowColor = x;
      ctx.lineWidth = ctx.shadowBlur = y;
      ctx.stroke();
    } else if (brushType == "Pen") {
      ctx.strokeStyle = x;
      ctx.lineWidth = getRandomInt(y-1, y+1);
      ctx.stroke();
    } else if (brushType == "Pixels") {
      for (var i = -10; i < 10; i+= 4) {
        for (var j = -10; j < 10; j+= 4) {
          if (Math.random() > 0.9) {
            ctx.fillStyle = x;
            ctx.fillRect(currX+i, currY+j, 4, 4);
          }
        }
      }
    } else if (brushType == "Blur") {

    } else if (brushType == "Eraser") {
      ctx.clearRect(currX, currY, y, y);
    }
    ctx.closePath();
}

function selectBrushColor() {
  x = document.getElementById("colorWheel").value
}

function selectBrushSize(obj) {
  y = parseInt(obj.innerHTML);
}

function selectBrushType(obj) {
  brushType = obj.innerText;
}

function changeDisplay(obj) {
  if (obj.style.display !== "flex") {
    obj.style.display = "flex";
  } else {
    obj.style.display = "";
  }
}

function changeColorDisplay() {
  var dropDown = document.getElementById("colorWheel")
  changeDisplay(dropDown)
}

function changeSizeDisplay() {
  var dropDown = document.getElementById("brushSize")
  changeDisplay(dropDown)
}

function changeTypeDisplay() {
  var dropDown = document.getElementById("brushType")
  changeDisplay(dropDown)
}

function save() {
  console.log("Canvas saved!")
}

function clear() {
  console.log("Canvas cleared!")
}
