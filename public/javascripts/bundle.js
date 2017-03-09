(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var canvas

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw(ctx) {
  // console.log("canvas", canvas);
  // console.log("ctx", ctx);
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

module.exports = {
  draw: draw(),
  getRandomInt: getRandomInt()
}

},{}],2:[function(require,module,exports){
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

document.addEventListener("DOMontentLoaded", init)

function init() {
  canvas = document.getElementById('drawingArea');

  console.log("brushstyles",brushStyles);

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

},{"./brushStyles.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvYnJ1c2hTdHlsZXMuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdmFyIGNhbnZhc1xuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGRyYXcoY3R4KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiY2FudmFzXCIsIGNhbnZhcyk7XG4gIC8vIGNvbnNvbGUubG9nKFwiY3R4XCIsIGN0eCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocHJldlgsIHByZXZZKTtcbiAgICBjdHgubGluZVRvKGN1cnJYLCBjdXJyWSk7XG4gICAgY3R4LmxpbmVKb2luID0gY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LnNoYWRvd0NvbG9yID0gY3R4LnNoYWRvd0JsdXIgPSBudWxsO1xuICAgIGlmKGJydXNoVHlwZSA9PSBcIlBlbmNpbFwiKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB4O1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmIChicnVzaFR5cGUgPT0gXCJTcHJheSBQYWludFwiKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjdHguc2hhZG93Q29sb3IgPSB4O1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IGN0eC5zaGFkb3dCbHVyID0geTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2UgaWYgKGJydXNoVHlwZSA9PSBcIlBlblwiKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB4O1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IGdldFJhbmRvbUludCh5LTEsIHkrMSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmIChicnVzaFR5cGUgPT0gXCJQaXhlbHNcIikge1xuICAgICAgZm9yICh2YXIgaSA9IC0xMDsgaSA8IDEwOyBpKz0gNCkge1xuICAgICAgICBmb3IgKHZhciBqID0gLTEwOyBqIDwgMTA7IGorPSA0KSB7XG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB4O1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN1cnJYK2ksIGN1cnJZK2osIDQsIDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYnJ1c2hUeXBlID09IFwiQmx1clwiKSB7XG5cbiAgICB9IGVsc2UgaWYgKGJydXNoVHlwZSA9PSBcIkVyYXNlclwiKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KGN1cnJYLCBjdXJyWSwgeSwgeSk7XG4gICAgfVxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRyYXc6IGRyYXcoKSxcbiAgZ2V0UmFuZG9tSW50OiBnZXRSYW5kb21JbnQoKVxufVxuIiwidmFyIGJydXNoU3R5bGVzID0gcmVxdWlyZShcIi4vYnJ1c2hTdHlsZXMuanNcIik7XG5cbnZhciBjYW52YXMsXG4gICAgY3R4LFxuICAgIGlzRHJhd2luZyA9IGZhbHNlLFxuICAgIHByZXZYID0gMCxcbiAgICBjdXJyWCA9IDAsXG4gICAgcHJldlkgPSAwLFxuICAgIGN1cnJZID0gMDtcblxudmFyIHggPSBcImJsYWNrXCIsXG4gICAgeSA9IDI7XG5cbnZhciBicnVzaFR5cGUgPSBcIlBlbmNpbFwiO1xuXG52YXIgc2F2ZWREcmF3aW5nXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01vbnRlbnRMb2FkZWRcIiwgaW5pdClcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdBcmVhJyk7XG5cbiAgY29uc29sZS5sb2coXCJicnVzaHN0eWxlc1wiLGJydXNoU3R5bGVzKTtcblxuICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgdHJ1ZSk7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgcmVzaXplQ2FudmFzLCB0cnVlKTtcbiAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgfVxuXG4gIGNhbnZhcy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICBnZXRNb3VzZUNvb3JkaW5hdGVzKGUpXG4gICAgaXNEcmF3aW5nID0gdHJ1ZTtcbiAgfVxuICBjYW52YXMub25tb3VzZXVwID0gZnVuY3Rpb24oZSkge1xuICAgIGlzRHJhd2luZyA9IGZhbHNlO1xuICB9XG4gIGNhbnZhcy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoaXNEcmF3aW5nKSB7XG4gICAgICAgIGdldE1vdXNlQ29vcmRpbmF0ZXMoZSlcbiAgICAgICAgYnJ1c2hTdHlsZXMuZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gIHNhdmUoKVxuICB3ID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGggPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNzc7XG4gIGxvYWQoKVxufVxuXG5mdW5jdGlvbiBnZXRNb3VzZUNvb3JkaW5hdGVzKGUpIHtcbiAgcHJldlggPSBjdXJyWDtcbiAgcHJldlkgPSBjdXJyWTtcbiAgY3VyclggPSBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgY3VyclkgPSBlLmNsaWVudFkgLSBjYW52YXMub2Zmc2V0VG9wO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RCcnVzaENvbG9yKCkge1xuICB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcldoZWVsXCIpLnZhbHVlXG59XG5cbmZ1bmN0aW9uIHNlbGVjdEJydXNoU2l6ZShvYmopIHtcbiAgeSA9IHBhcnNlSW50KG9iai5pbm5lckhUTUwpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RCcnVzaFR5cGUob2JqKSB7XG4gIGJydXNoVHlwZSA9IG9iai5pbm5lclRleHQ7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURpc3BsYXkob2JqKSB7XG4gIGlmIChvYmouc3R5bGUuZGlzcGxheSAhPT0gXCJmbGV4XCIpIHtcbiAgICBvYmouc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9IGVsc2Uge1xuICAgIG9iai5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb2xvckRpc3BsYXkoKSB7XG4gIHZhciBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JXaGVlbFwiKVxuICBjaGFuZ2VEaXNwbGF5KGRyb3BEb3duKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTaXplRGlzcGxheSgpIHtcbiAgdmFyIGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicnVzaFNpemVcIilcbiAgY2hhbmdlRGlzcGxheShkcm9wRG93bilcbn1cblxuZnVuY3Rpb24gY2hhbmdlVHlwZURpc3BsYXkoKSB7XG4gIHZhciBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJ1c2hUeXBlXCIpXG4gIGNoYW5nZURpc3BsYXkoZHJvcERvd24pXG59XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIGNvbnNvbGUubG9nKFwiQ2FudmFzIHNhdmVkIVwiKVxuICB2YXIgc2F2ZWRTdGF0ZSA9IGNhbnZhcy50b0RhdGFVUkwoKVxufVxuXG5mdW5jdGlvbiBsb2FkKCkge1xuICBjb25zb2xlLmxvZyhcIkNhbnZhcyBsb2FkZWQhXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY29uc29sZS5sb2coXCJDYW52YXMgY2xlYXJlZCFcIilcbn1cbiJdfQ==
