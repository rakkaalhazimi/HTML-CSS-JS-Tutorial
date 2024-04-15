// TODO: audio slider drag will pause the audio

let audioContext = new AudioContext();
let analyserNode = audioContext.createAnalyser();
let audio = document.getElementById("audio-source");
let source = audioContext.createMediaElementSource(audio);
source.connect(analyserNode);
analyserNode.connect(audioContext.destination);

let audioDuration;
let bufferLength = analyserNode.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);
console.log("Buffer length: ", dataArray.length);

let audioPlayerSlider = document.getElementById("audio-player-slider");
let timer = document.getElementById("timer");

let audioSliderIntervalId;
let audioTimerIntervalId;
let isAudioSliderInterrupted = false;
let isAudioTimerInterrupted = false;


function updateAudioSliderStyle() {
  // This is where we change the track progress color.
  audioPlayerSlider.style.background = 
    `linear-gradient(to right, #0f0f0f ${audioPlayerSlider.value}%, #f0f0f0 ${audioPlayerSlider.value}%)`;
}

function startAudioSlider() {
  audioSliderIntervalId = setInterval(() => {
    audioPlayerSlider.value = Math.round((audio.currentTime / audioDuration) * 100);
    updateAudioSliderStyle();    
  }, 100);
}

function stopAudioSlider() {
  clearInterval(audioSliderIntervalId);
}

function startAudioTimer() {
  audioTimerIntervalId = setInterval(() => {
    let seconds = Math.floor(audio.currentTime);
    timer.innerText = new Date(seconds * 1000).toISOString().substring(14, 19);
  }, 100);
}

function stopAudioTimer() {
  clearInterval(audioTimerIntervalId);
}

function onAudioEnded() {
  console.log("Audio ended");
  // console.log("Current time: ", audio.currentTime);
  // console.log("Current slider: ", audioPlayerSlider.value);
  
  // Clear interval if user didn't drag the slider during audio playback
  if (!isAudioSliderInterrupted) {
    setTimeout(stopAudioSlider, 200);
  }
  if (!isAudioTimerInterrupted) {
    setTimeout(stopAudioTimer, 200);
  }
}

async function onAudioSliderChange() {
  stopAudioSlider();
  stopAudioTimer();
  audio.currentTime = (audioPlayerSlider.value / 100) * audioDuration;
  startAudioSlider();
  startAudioTimer();
  updateAudioSliderStyle();  
}

function play() {
  console.log("Play audio");
  // console.log("Current time: ", audio.currentTime);
  // console.log("Has ended: ", audio.ended);
  audioContext.resume();
  
  // Continue if the audio hasn't ended
  if (audioPlayerSlider.value !== "100") {
    audio.currentTime = (audioPlayerSlider.value / 100) * audioDuration;
  }
  
  isAudioSliderInterrupted = false;
  isAudioTimerInterrupted = false;
  audio.play();
  analyserNode.getByteTimeDomainData(dataArray);
  startAudioSlider();
  startAudioTimer();
}

function pause() {
  console.log("Pause audio");
  audio.pause();
  stopAudioSlider();
  stopAudioTimer();
}

async function main() {
  
  // Apply style on load
  updateAudioSliderStyle();
  
  // Register some events
  
  // Use 'input' event because it will happen immediately and we can stop previous interval.
  // If you use 'change' event, the event is fired when the element loss focus.
  // It might make the slider stuttering.
  audioPlayerSlider.addEventListener("input", onAudioSliderChange);
  audio.addEventListener("ended", onAudioEnded);
  
  // Get audio duration
  let blob = await fetch(audio.src).then(response => response.blob());
  let reader = new FileReader();
  reader.readAsArrayBuffer(blob);
  reader.addEventListener("loadend", async (event) => {
    let audioArrayBuffer = event.target.result;
    let audioBuffer = await audioContext.decodeAudioData(audioArrayBuffer);
    audioDuration = audioBuffer.duration;
    console.log("Audio duration: ", audioDuration);
  });
  
}

main();

