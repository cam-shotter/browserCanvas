var canvas, ctx, isDrawing = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0

var x = "black",
    y = 2;

function init() {
  canvas = document.getElementById('drawingArea');
  ctx = canvas.getContext("2d");
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight - 77;

  canvas.addEventListener("mousemove", function (e) {
      findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
      findxy('down', e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
      findxy('up', e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
      findxy('out', e)
  }, false);
}

function findxy(res, e) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    isDrawing = true;
  }
  if (res == 'up' || res == "out") {
    isDrawing = false;
  }
  if (res == 'move') {
    if (isDrawing) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
    }
  }
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.lineJoin = ctx.lineCap = "round";
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function selectBrushColor() {
  x = document.getElementById("colorWheel").value
}

function selectBrushSize(obj) {
  y = parseInt(obj.innerHTML);
}

function selectBrushType(obj) {
  console.log(obj.innerHTML + " is selected");
}

function changeDisplay(obj) {
  if (obj.style.display == "") {
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
