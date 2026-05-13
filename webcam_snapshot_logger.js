// SILENT WEBCAM CAPTURE INITIATED
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    console.log("Capturing thief's face...");
    console.log("Uploading face data to Cyber Crime database...");
}).catch(err => {
    console.error("Camera access denied. Locking system completely...");
});
