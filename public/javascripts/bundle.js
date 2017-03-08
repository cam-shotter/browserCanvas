(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw(ctx) {
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

},{"./brushStyles.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvYnJ1c2hTdHlsZXMuanMiLCJwdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGRyYXcoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocHJldlgsIHByZXZZKTtcbiAgICBjdHgubGluZVRvKGN1cnJYLCBjdXJyWSk7XG4gICAgY3R4LmxpbmVKb2luID0gY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LnNoYWRvd0NvbG9yID0gY3R4LnNoYWRvd0JsdXIgPSBudWxsO1xuICAgIGlmKGJydXNoVHlwZSA9PSBcIlBlbmNpbFwiKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB4O1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmIChicnVzaFR5cGUgPT0gXCJTcHJheSBQYWludFwiKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjdHguc2hhZG93Q29sb3IgPSB4O1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IGN0eC5zaGFkb3dCbHVyID0geTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9IGVsc2UgaWYgKGJydXNoVHlwZSA9PSBcIlBlblwiKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB4O1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IGdldFJhbmRvbUludCh5LTEsIHkrMSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmIChicnVzaFR5cGUgPT0gXCJQaXhlbHNcIikge1xuICAgICAgZm9yICh2YXIgaSA9IC0xMDsgaSA8IDEwOyBpKz0gNCkge1xuICAgICAgICBmb3IgKHZhciBqID0gLTEwOyBqIDwgMTA7IGorPSA0KSB7XG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB4O1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGN1cnJYK2ksIGN1cnJZK2osIDQsIDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYnJ1c2hUeXBlID09IFwiQmx1clwiKSB7XG5cbiAgICB9IGVsc2UgaWYgKGJydXNoVHlwZSA9PSBcIkVyYXNlclwiKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KGN1cnJYLCBjdXJyWSwgeSwgeSk7XG4gICAgfVxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRyYXc6IGRyYXcoKSxcbiAgZ2V0UmFuZG9tSW50OiBnZXRSYW5kb21JbnQoKVxufVxuIiwidmFyIGJydXNoU3R5bGVzID0gcmVxdWlyZShcIi4vYnJ1c2hTdHlsZXMuanNcIik7XG5cbnZhciBjYW52YXMsXG4gICAgY3R4LFxuICAgIGlzRHJhd2luZyA9IGZhbHNlLFxuICAgIHByZXZYID0gMCxcbiAgICBjdXJyWCA9IDAsXG4gICAgcHJldlkgPSAwLFxuICAgIGN1cnJZID0gMDtcblxudmFyIHggPSBcImJsYWNrXCIsXG4gICAgeSA9IDI7XG5cbnZhciBicnVzaFR5cGUgPSBcIlBlbmNpbFwiO1xuXG52YXIgc2F2ZWREcmF3aW5nXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3aW5nQXJlYScpO1xuXG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCB0cnVlKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCByZXNpemVDYW52YXMsIHRydWUpO1xuICAgICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB9XG5cbiAgY2FudmFzLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSkge1xuICAgIGdldE1vdXNlQ29vcmRpbmF0ZXMoZSlcbiAgICBpc0RyYXdpbmcgPSB0cnVlO1xuICB9XG4gIGNhbnZhcy5vbm1vdXNldXAgPSBmdW5jdGlvbihlKSB7XG4gICAgaXNEcmF3aW5nID0gZmFsc2U7XG4gIH1cbiAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIGlmIChpc0RyYXdpbmcpIHtcbiAgICAgICAgZ2V0TW91c2VDb29yZGluYXRlcyhlKVxuICAgICAgICBicnVzaFN0eWxlcy5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgc2F2ZSgpXG4gIHcgPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgaCA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA3NztcbiAgbG9hZCgpXG59XG5cbmZ1bmN0aW9uIGdldE1vdXNlQ29vcmRpbmF0ZXMoZSkge1xuICBwcmV2WCA9IGN1cnJYO1xuICBwcmV2WSA9IGN1cnJZO1xuICBjdXJyWCA9IGUuY2xpZW50WCAtIGNhbnZhcy5vZmZzZXRMZWZ0O1xuICBjdXJyWSA9IGUuY2xpZW50WSAtIGNhbnZhcy5vZmZzZXRUb3A7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEJydXNoQ29sb3IoKSB7XG4gIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yV2hlZWxcIikudmFsdWVcbn1cblxuZnVuY3Rpb24gc2VsZWN0QnJ1c2hTaXplKG9iaikge1xuICB5ID0gcGFyc2VJbnQob2JqLmlubmVySFRNTCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEJydXNoVHlwZShvYmopIHtcbiAgYnJ1c2hUeXBlID0gb2JqLmlubmVyVGV4dDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGlzcGxheShvYmopIHtcbiAgaWYgKG9iai5zdHlsZS5kaXNwbGF5ICE9PSBcImZsZXhcIikge1xuICAgIG9iai5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0gZWxzZSB7XG4gICAgb2JqLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbG9yRGlzcGxheSgpIHtcbiAgdmFyIGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcldoZWVsXCIpXG4gIGNoYW5nZURpc3BsYXkoZHJvcERvd24pXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNpemVEaXNwbGF5KCkge1xuICB2YXIgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJydXNoU2l6ZVwiKVxuICBjaGFuZ2VEaXNwbGF5KGRyb3BEb3duKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUeXBlRGlzcGxheSgpIHtcbiAgdmFyIGRyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicnVzaFR5cGVcIilcbiAgY2hhbmdlRGlzcGxheShkcm9wRG93bilcbn1cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgY29uc29sZS5sb2coXCJDYW52YXMgc2F2ZWQhXCIpXG4gIHZhciBzYXZlZFN0YXRlID0gY2FudmFzLnRvRGF0YVVSTCgpXG59XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIGNvbnNvbGUubG9nKFwiQ2FudmFzIGxvYWRlZCFcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBjb25zb2xlLmxvZyhcIkNhbnZhcyBjbGVhcmVkIVwiKVxufVxuIl19
