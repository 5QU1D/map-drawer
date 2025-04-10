//import { Canvg } from 'canvg'

//draw grid
// https://stackoverflow.com/questions/11735856/draw-a-grid-on-an-html-5-canvas-element
function drawGrid(width,height){
    canvas = document.getElementById("canvas");
    canvas.width = width + 20;
    canvas.height = height + 20;

    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      ctxt.save();
      ctxt.beginPath();

      ctxt.strokeStyle = "black";

      var pad = 10; //padding
      //adjust width and height to account for external grid padding

      for(var x = 0; x <= width; x += 120){
        ctxt.moveTo(0.5 + x + pad, pad);
        ctxt.lineTo(0.5 + x + pad, height+pad);
        //ctxt.stroke();
      }

      for (var y = 0; y <=height; y+=120){
        ctxt.moveTo(pad, 0.5 + y + pad);
        ctxt.lineTo(width + pad, 0.5 + y + pad);
        //ctxt.stroke();
      }
      ctxt.stroke();
      ctxt.closePath();

      tileParse();
    }
}

//draw river (d6)
function drawRiver(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);

    switch(extremeness){
      case 1:
        image.src = 'assets/rivers/River1.svg';
        break;
      case 2:
        image.src = 'assets/rivers/River2.svg';
        break;
      case 3:
        image.src = 'assets/rivers/River3.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/rivers/River.svg';
    }

    image.onload = function(){
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
    
  }
}

//draw mountain (d10)
function drawMountain(tileRow, tileCol, extremeness){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctxt = canvas.getContext("2d");
      var image = new Image(120,120);

      switch(extremeness){
        case 1:
          image.src = 'assets/mountains/Mountain1.svg';
          break;
        case 2:
          image.src = 'assets/mountains/Mountain2.svg';
          break;
        case 3:
          image.src = 'assets/mountains/Mountain3.svg';
          break;
        default:
          //use original tile as default
          image.src = 'assets/mountains/Mountains.svg';
      }

      image.onload = function(){
        startX = (tileCol*120)+10;
        startY = (tileRow*120)+10;

        ctxt.drawImage(image, startX, startY, 120, 120);
      }
      
    }
}

//draw settlement (d8)
function drawSettlement(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);

    switch(extremeness){
      case 1:
        image.src = 'assets/settlements/Settlement1.svg';
        break;
      case 2:
        image.src = 'assets/settlements/Settlement2.svg';
        break;
      case 3:
        image.src = 'assets/settlements/Settlement3.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/settlements/Settlement.svg';
    }

    image.onload = function(){
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
    
  }
}

//draw forest (d20)
function drawForest(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);

    switch(extremeness){
      case 1:
        image.src = 'assets/forests/Forest1.svg';
        break;
      case 2:
        image.src = 'assets/forests/Forest2.svg';
        break;
      case 3:
        image.src = 'assets/forests/Forest3.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/forests/Forest.svg';
    }

    image.onload = function(){
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
    
  }
}

//draw valley (d20)
function drawValley(tileRow, tileCol, extremeness){
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctxt = canvas.getContext("2d");
    var image = new Image(120,120);

    switch(extremeness){
      case 1:
        image.src = 'assets/valleys/Valley1.svg';
        break;
      case 2:
        image.src = 'assets/valleys/Valley2.svg';
        break;
      case 3:
        image.src = 'assets/valleys/Valley3.svg';
        break;
      default:
        //use original tile as default
        image.src = 'assets/valleys/Valley.svg';
    }

    image.onload = function(){
      startX = (tileCol*120)+10;
      startY = (tileRow*120)+10;

      ctxt.drawImage(image, startX, startY, image.width, image.height);
    }
    
  }
}
