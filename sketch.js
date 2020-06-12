var mouseCursor = []

var values = []

function setup() {
  createCanvas(displayWidth-10, displayHeight-20);
  database = firebase.database()
}

function draw() {
  background(100,100,100);  
  readData()
  beginShape()
  stroke("black")
  strokeWeight(3)
  noFill()
  for (var i = 0; i< values.length; i++){
  vertex(values[i].x,values[i].y)
  endShape()
  }
  camera.position.x = displayWidth/2
  camera.position.y = mouseY
}
function mouseDragged(){
  var position = {
    x:mouseX,
    y:mouseY
  }
  mouseCursor.push(position)
  database.ref('picture').set({point:mouseCursor})
}
function readData(){
  database.ref('picture/').on("value",(data)=>{
    values = data.val().point
  })
}