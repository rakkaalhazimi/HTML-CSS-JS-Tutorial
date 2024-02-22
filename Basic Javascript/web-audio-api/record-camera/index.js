let video = document.getElementById("video")
let button = document.getElementById("button")

async function showCamera() {
  
  console.log("Recording");
  
  if (navigator.mediaDevices) {
    const stream = await navigator.mediaDevices.getUserMedia({ "video": true });
    video.srcObject = stream;
    
  }
}

button.addEventListener("click", showCamera)