var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

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
    console.log(e)


    flag = true;
    dot_flag = true;
    if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.arc(currX, currY, y, 0, 2 * Math.PI, false);
        ctx.closePath();
        dot_flag = false;
    }
  }
  if (res == 'up' || res == "out") {
    flag = false;
  }
  if (res == 'move') {
    if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
    }
  }
}

function draw() {
  if (y < 6) {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.arc(currX, currY, y, 0, 2 * Math.PI, false);
    ctx.fillStyle = x;
    ctx.fill();
    ctx.strokeStyle = x;
    ctx.stroke();
    ctx.closePath();
  }
}

function selectBrushColor() {
  x = document.getElementById("colorWheel").value
  if (x == "#ffffff") y = 14;
  else y = 2;
}

function selectBrushSize() {
  console.log("brushSize changed");
}

function save() {
  console.log("Canvas saved!")
}

function clear() {
  console.log("Canvas cleared!")
}

function changeColorDisplay() {
  var dropDown = document.getElementById("colorWheel")

  if (dropDown.style.display == "") {
    dropDown.style.display = "flex";
  } else {
    dropDown.style.display = "";
  }
}