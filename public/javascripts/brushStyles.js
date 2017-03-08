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
