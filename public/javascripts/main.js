var brushStyles = require("./brushStyles.js");

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

var savedDrawing

function init() {
  canvas = document.getElementById('drawingArea');

  if (canvas.getContext) {
          ctx = canvas.getContext("2d");

          window.addEventListener('resize', resizeCanvas, true);
          window.addEventListener('orientationchange', resizeCanvas, true);
          resizeCanvas();
        }

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
        brushStyles.draw(ctx);
    }
  }
}

function resizeCanvas() {
  save()
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight - 77;
  load()
}

function getMouseCoordinates(e) {
  prevX = currX;
  prevY = currY;
  currX = e.clientX - canvas.offsetLeft;
  currY = e.clientY - canvas.offsetTop;
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
  var savedState = canvas.toDataURL()
}

function load() {
  console.log("Canvas loaded!");
}

function clear() {
  console.log("Canvas cleared!")
}
