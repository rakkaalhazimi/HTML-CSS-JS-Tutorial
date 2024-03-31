let audioContext = new AudioContext();
let audioFile = document.getElementById("audio-file");
let canvasWave = document.getElementById("waveform-canvas");
let canvasWaveContext = canvasWave.getContext("2d");
let canvasBlock = document.getElementById("block-canvas");
let canvasBlockContext = canvasBlock.getContext("2d");
let CANVAS_WIDTH = canvasWave.clientWidth;
let CANVAS_HEIGHT = canvasWave.clientHeight;


canvasWaveContext.fillStyle = "rgb(240 240 240)";
canvasWaveContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
canvasBlockContext.fillStyle = "rgb(240 240 240)";
canvasBlockContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// canvasContext.reset();

async function uploadAudio(event) {
  console.log("Upload audio");
  let file = event.target.files[0];
  let arrayBuffer = await file.arrayBuffer();
  let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  let audioWaveform = audioBuffer.getChannelData(0);
  
  console.log("Max value: ", Math.max(...audioWaveform));
  console.log("Min value: ", Math.min(...audioWaveform));
  
  // Wave Style
  let waveWidth = CANVAS_WIDTH / audioWaveform.length;
  for (let i = 0; i < audioWaveform.length; i++) {
    
    let sample = audioWaveform[i];
    let x = i * waveWidth;
    let y = Math.floor(CANVAS_HEIGHT / 2);
    let width = 1;
    let height = sample * Math.floor(CANVAS_HEIGHT / 2);

    if (sample > 0) {
      height = Math.max(height, 0.1);
    } else {
      height = Math.min(height, -0.1);
    }
    
    canvasWaveContext.fillStyle = "green";
    canvasWaveContext.fillRect(x, y, width, height);
  }
  
  // Block Style
  let blockCount = 100;
  let blockWidth = CANVAS_WIDTH / blockCount;
  let waveStep = Math.floor(audioWaveform.length / blockCount);
  
  for (let i = 0; i < blockCount; i++) {
    
    let samples = audioWaveform.slice(i * waveStep, (i + 1) * waveStep);
    let sample = Math.max(...samples);
    console.log(sample);

    let x = i * blockWidth;
    let y = Math.floor(CANVAS_HEIGHT / 2);
    let width = blockWidth;
    let height = Math.abs(sample * Math.floor(CANVAS_HEIGHT / 2));
    
    height = Math.max(height, 5);
    height = Math.min(height, CANVAS_HEIGHT) * 0.7;
    
    canvasBlockContext.strokeStyle = "green";
    canvasBlockContext.fillStyle = "green";
    canvasBlockContext.beginPath();
    canvasBlockContext.roundRect(x, y + (-height), width * 0.5, height * 2, [40]);
    canvasBlockContext.fill();
    
    // canvasBlockContext.fillRect(x, y + (-height), width * 0.5, height * 2);
  }
  
}

audioFile.addEventListener("change", uploadAudio);