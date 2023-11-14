var soundl
function preload() {
  soundl=loadSound("Luxiem - Hope in the dark  (Official Music Video)  _ NIJISANJI EN .mp3")
} //載入音樂


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#48304D");
  analyzer=new p5.Amplitude();
  analyzer.setInput(soundl)
}

var x=1000; //宣告一個畫方框的x軸變數(var宣告變數為一格全域變數)
var y=500; //宣告一個畫方框的y軸變數(var宣告變數為一格全域變數)
var r_b=100;
var w=70; //宣告一個畫方框的寬度變數(var宣告變數為一格全域變數)
var r_s=20;

function draw() {

  noFill()
  rectMode(CENTER)
  strokeWeight(5)
  background("#48304D");

if(soundl.isPlaying()){ //有播放時
  var fc=map(analyzer.getLevel(),0,1,50,300)
  var fs=map(analyzer.getLevel(),0,1,20,50)
  var fe=map(analyzer.getLevel(),0,1,10,60)
  var fes=map(analyzer.getLevel(),0,1,30,-5)
}else{ //沒播放時
  var fc =map(mouseX,0,width,50,300)
  var fs =map(mouseX,0,width,20,30)
  var fe =map(mouseX,0,width,10,25)
  var fes =map(mouseX,0,width,5,50)
}

  stroke("#FBCAEF")
  ellipse(width/2,height/2,fc*5)
  
  stroke("#5448C8")
  rect(width/2,height/2+20*5,fs*5)
  
  noStroke()
  fill("#FFFECB")
  ellipse(width/2-18*5,height/2-8*5,(fes-15)*5)
  fill("#ADFC92")
  ellipse(width/2+18*5,height/2-8*5,(fe-3)*5)
    
  stroke("#FF2E00")
  noFill()
  ellipse(width/2-18*5,height/2-8*5,(r_s+5)*5)
  stroke("#FF2E00")
  ellipse(width/2+18*5,height/2-8*5,(fe+5)*5)

  stroke("#E637BF")
  rect(width/2,height/2,w*5)

}



function mousePressed(){
  if(soundl.isPlaying()){
    soundl.stop();
   }else{
   soundl.play();
 }
}