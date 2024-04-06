let audioContext = new AudioContext();
let audioFile = document.getElementById("audio-file");




function showWavePlot(waveform) {
  
  let canvas = document.getElementById("waveform-canvas");
  let context = canvas.getContext("2d");
  let CANVAS_WIDTH = canvas.clientWidth;
  let CANVAS_HEIGHT = canvas.clientHeight;
  
  context.fillStyle = "rgb(240 240 240)";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillStyle = "green";
  
  let waveWidth = CANVAS_WIDTH / waveform.length;
  for (let i = 0; i < waveform.length; i++) {
    
    let sample = waveform[i];
    let x = i * waveWidth;
    let y = Math.floor(CANVAS_HEIGHT / 2);
    let width = 1;
    let height = (sample * Math.floor(CANVAS_HEIGHT / 2)) + 1;
    
    context.fillRect(x, y, width, height);
  }
}


function showWaveBarPlot(waveform) {
  
  let canvas = document.getElementById("block-canvas");
  let context = canvas.getContext("2d");
  let CANVAS_WIDTH = canvas.clientWidth;
  let CANVAS_HEIGHT = canvas.clientHeight;

  context.fillStyle = "rgb(240 240 240)";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.strokeStyle = "green";
  context.fillStyle = "green";
  
  let blockCount = 100;
  let blockWidth = CANVAS_WIDTH / blockCount;
  let waveStep = Math.floor(waveform.length / blockCount);
  
  for (let i = 0; i < blockCount; i++) {
    
    let samples = waveform.slice(i * waveStep, (i + 1) * waveStep);
    let sample = Math.max(...samples);

    let x = i * blockWidth;
    let y = Math.floor(CANVAS_HEIGHT / 2);
    let width = blockWidth;
    let height = Math.abs(sample * Math.floor(CANVAS_HEIGHT / 2)) + 4;
    
    context.beginPath();
    context.roundRect(x, y + (-height), width * 0.5, height * 2, [40]);
    context.fill();
    
    // canvasBlockContext.fillRect(x, y + (-height), width * 0.5, height * 2);
  }
}


async function uploadAudio(event) {
  console.log("Upload audio");
  let file = event.target.files[0];
  let arrayBuffer = await file.arrayBuffer();
  let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  let audioWaveform = audioBuffer.getChannelData(0);
  
  showWavePlot(audioWaveform);
  showWaveBarPlot(audioWaveform);
}

audioFile.addEventListener("change", uploadAudio);