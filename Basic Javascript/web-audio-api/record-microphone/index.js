




async function main() {
  const audioCtx = new AudioContext();
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  

  if (navigator.mediaDevices) {
    const stream = await navigator.mediaDevices.getUserMedia({ "audio": true });
    const microphone = audioCtx.createMediaStreamSource(stream);
    // Make the microphone sound stream to output device (heared directly).
    // microphone.connect(audioCtx.destination);

    // Instantiate the media recorder.
    const mediaRecorder = new MediaRecorder(stream, {mimeType: 'audio/webm; codecs=opus'});
    
    // Create a buffer to store the incoming data.
    let chunks = [];
    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    }

    mediaRecorder.onstop = () => {
      // A "blob" combines all the audio chunks into a single entity
      const blob = new Blob(chunks, { "type": "audio/ogg; codecs=opus" });
      
      // One of many ways to use the blob
      const audio = new Audio();
      const audioURL = window.URL.createObjectURL(blob);
      audio.controls = true;
      audio.src = audioURL;
      document.body.append(audio);
      audio.play();
      console.log("Chunks len: ", chunks.length);
      
      // Clear buffer
      chunks = []; 
    }
    
    start.onclick = (event) => {
      
      for (elm of document.body.children) {
        console.log(elm.tagName);
        if (elm.tagName.toLowerCase() == "audio") {
          elm.remove();
        }
      }
      
      console.log("Start recording");
      audioCtx.resume();
      mediaRecorder.start();
    };
    
    stop.onclick = (event) => {
      console.log("Stop recording");
      mediaRecorder.stop()
    };
    
  }
}

main();