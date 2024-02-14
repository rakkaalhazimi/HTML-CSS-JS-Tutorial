function record() {  
  const audios = document.querySelectorAll('audio');
  const mediaRecorders = [];
  let timestamp = null;

  audios.forEach((audio, index) => {
    audio.play();
    console.log(audio);
    const stream = audio.captureStream();
    console.log(stream.getAudioTracks());
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm; codecs=opus',
    });
    let recordedChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        console.log(event);
        console.log(event.timecode);
        recordedChunks.push(event.data);
        console.log('buffer size: ', event.data.size);
        timestamp = event.timecode;
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, {
        type: 'audio/webm; codecs=opus',
      });
      // recordedChunks = [];
      console.log("Last timestamp: ", timestamp);
      console.log("Date: ", new Date(timestamp));

      // startRecording(mediaRecorder);
      
      let now = new Date();
      console.log("Just now timestamp: ", now);
      console.log("Just now Date: ", now.getTime() / 1000);

      // const filename = `audio_channel_${index}_${Date.now()}.webm`;
      // const filename = `audio_channel_${index}_${Date.now()}.wav`; // rename to .wav for solving minio weird bugs

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.innerHTML = "Download";
      a.href = url;
      a.download = "audio.webm";
      // a.style.display = 'none';
      document.body.appendChild(a);
      // console.debug(`Downloading ${filename}`);
      // a.click();
      // window.URL.revokeObjectURL(url);
    };

    mediaRecorders.push(mediaRecorder);
  });
  
  function startRecording(mediaRecorder) {
    mediaRecorder.start();
    setTimeout(() => {
      mediaRecorder.stop();
    }, 10000);
  }
  
  mediaRecorders.forEach((mediaRecorder) => {
    console.log("Media");
    startRecording(mediaRecorder);
  });
}


const audioContext = new AudioContext();
const source = audioContext.createBufferSource();
