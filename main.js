function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(525, 175);
  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier('MobileNet', ModelLoaded);
}

function ModelLoaded() {
  console.log("Model is Initialized")
}

function draw() {
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if(error) {
    console.error(error) 
  }

  else {
    console.log(results)
    document.getElementById("para_1_object").innerHTML = results[0].label;
    document.getElementById("para_2_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}


