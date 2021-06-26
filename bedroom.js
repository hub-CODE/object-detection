status="";
img = "";

function preload(){
   img = LoadImage('bedroom.jpg');
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    status = true;
    console.log("Model Loaded!");
}

function gotResults(error, results){
if (error) 
{
    console.log(error);
}
}