
function start() { navigator.mediaDevices.getUserMedia({ audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TejFDakt5/model.json', modelReady); } 
function modelReady(){ classifier.classify( gotResults); }function gotResults(error,results) {
   if(error) {
       console.error(error);

   }
   else{
       console.log(results);
       document.getElementById("result_label").innerHTML=results[0].label;
       document.getElementById("result_confidence").innerHTML=results[0].result_confidence;
img=document.getElementById("alien1");
img1=document.getElementById("alien2");
img2=document.getElementById("alien3");
img3=document.getElementById("alien4");
if(results[0].label=="Clap"){
    img.src="aliens-01.gif";
    img1.src="aliens-02.png";
    img2.src="aliens-03.png";
    img3.src="aliens-04.png";
}
else if(results[0].label=="Bell"){
    img.src="aliens-01.png";
    img1.src="aliens-02.gif";
    img2.src="aliens-03.png";
    img3.src="aliens-04.png";
}
else if(results[0].label=="Snap"){
    img.src="aliens-01.png";
    img1.src="aliens-02.png";
    img2.src="aliens-03.gif";
    img3.src="aliens-04.png";
}
else{
    img.src="aliens-01.gif";
    img1.src="aliens-02.png";
    img2.src="aliens-03.png";
    img3.src="aliens-04.gif";
}
   }
}