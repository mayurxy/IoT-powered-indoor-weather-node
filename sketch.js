var data;
var reading =0;
var currentM;
//this code makes responsive effect on webpage based on the analogValue

function setup() {
  createCanvas(500,500);
  var url= 'https://api.particle.io/v1/devices/340030000947353138383138/analogvalue?access_token=208bf9511a02ef49d47aa959bf144ae45530a73d';
  data = loadJSON(url, parseData);
  currentM=millis();
}


function draw() {
if((millis()- currentM)>2000){
  callAPI();
  text(reading,20,20);
  ellipse( width/2,height/2,reading, reading);
}

}

function callAPI(){
  var url= 'https://api.particle.io/v1/devices/340030000947353138383138/analogvalue?access_token=208bf9511a02ef49d47aa959bf144ae45530a73d';
  data = loadJSON(url, parseData);
  currentM=millis();
}

function parseData(data){
  background(255,0,0);
  reading = data.result;
  print("reading:"+reading);

}