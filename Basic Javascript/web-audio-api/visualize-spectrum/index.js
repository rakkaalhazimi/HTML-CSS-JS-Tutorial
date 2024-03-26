// Setup audio context
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
console.log("Analyzer fft size: ", analyser.fftSize);
console.log("Frequency bin count: ", analyser.frequencyBinCount);

const audioTag = new Audio();
audioTag.src = "Lappland-033.ogg"; //insert file name here
audioTag.preload = "auto";
audioTag.controls = true;
const source = audioCtx.createMediaElementSource(audioTag);
source.connect(analyser);
analyser.connect(audioCtx.destination);

// Setup ArrayBuffer
const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Float32Array(bufferLength);
const dataArray = new Uint8Array(bufferLength);

// Setup canvas
const WIDTH = 800;
const HEIGHT = 300;
const canvas = document.getElementById("waveform-viz");
const canvasCtx = canvas.getContext("2d");
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

function play() {
  // Waveform line will show when we play the audio
  audioTag.play();
}


function draw() {
  // Loop draw function
  requestAnimationFrame(() => setTimeout(draw, 50));
  
  //Get spectrum data
  // analyser.getFloatTimeDomainData(dataArray);
  analyser.getByteTimeDomainData(dataArray);
  
  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";
  canvasCtx.beginPath();
  
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  
  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * (HEIGHT / 2);
  
    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }
  
    x += sliceWidth;
  }
  canvasCtx.stroke();
}


draw();