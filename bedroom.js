var status = "";
function preload(){
 img = loadImage("Bedroom.jpg");
}
function setup(){
 canvas = createCanvas(400, 400);
 canvas.center();
 objectDetector = ml5.objectDetector("cocossd", model_loaded);
 document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function model_loaded(){
 console.log("Model Loaded");
 status = true;
 objectDetector.detect(img, got_results)
}
function got_results(error, results){
 if(error){
  console.error(error);
 }
 else{
  console.log(results);
 }
}