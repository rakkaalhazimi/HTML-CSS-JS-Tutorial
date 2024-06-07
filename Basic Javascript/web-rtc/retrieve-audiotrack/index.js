async function main() {
  
  let pc = new RTCPeerConnection({
    iceServers: [
      {
        "urls": [
          "turn:13.107.65.150:3478?transport=udp",
          "turn:13.107.65.150:443?transport=tcp",
          "turns:world.relay.skype.com:443"
        ],
        "credential": "zXQye7VLQlAvvOH4eitnv734f/Y=",
        "username": "AgAAJMnIoAAB2n/ztp4zjGgM7ilaPxhY1F+xa8oExfgAAAAAcBsT52H7k3LizSuArD+bxZhsQ70="
      }
    ],
    rtcpMuxPolicy: "require",
    iceTransportPolicy: "all",
    bundlePolicy: "max-bundle",
    sdpSemantics: "unified-plan",
    enableDtlsSrtp: true,
    encodedInsertableStreams: false
  })

  pc.onconnectionstatechange = (event) => {
    switch (pc.connectionState) {
      
      case "new":
        console.log("RTCPeerConnection: New");
        break;
      
      // The connection has become fully connected
      case "connected":
        console.log('RTCPeerConnection: Connected');
        break;

      case "disconnected":
        console.log('RTCPeerConnection: Disconnected');
        alert('Call Ended !');
        location.reload();
        break;

      // One or more transports has terminated unexpectedly or in an error
      case "failed":
        console.log('RTCPeerConnection: Failed');
        break;

      // The connection has been closed
      case "closed":
        console.log('RTCPeerConnection: Closed');
        break;
    }
  }


  const offer = await pc.createOffer();
  console.log(offer);
  await pc.setLocalDescription(offer);
}

main();
