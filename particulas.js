function testar(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}setInterval(testar)
canvas = document.getElementById("canvas")
c = canvas.getContext('2d')
x = 0
y = 0
rad = 0
function Circles(x,y,dx,dy,rad){
  this.x = x
  this.y = y
  this.dx = dx;
  this.dy = dy;
  rad = rad
 

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, rad, 0, Math.PI * 2);
    c.fillStyle = "white"
    c.fill();
    
    if(teste[i]-teste[i-1]<200 && teste[i]-teste[i-1]>-200){
    c.beginPath();
    c.strokeStyle = "white"
    c.moveTo(teste[i],teste2[i])
    c.lineTo(teste[i],teste2[i])
    c.stroke() 
  }
  if(teste[i]-teste[i-2]<200 && teste[i]-teste[i-2]>-200){
    c.beginPath();
    c.strokeStyle = "white"
    c.moveTo(teste[i],teste2[i])
    c.lineTo(teste[i-2]-1,teste2[i-2]-1)
    c.stroke() 
  }
  if(teste[i]-teste[i-3]<100 && teste[i]-teste[i-3]>-100){
    c.beginPath();
    c.strokeStyle = "white"
    c.moveTo(teste[i],teste2[i])
    c.lineTo(teste[i-4]-1,teste2[i-4]-1)
    c.stroke() 

  }
  if(teste[i]-teste[i-4]<100 && teste[i]-teste[i-4]>-100){
    c.beginPath();
    c.strokeStyle = "white"
    c.moveTo(teste[i],teste2[i])
    c.lineTo(teste[i-5]-1,teste2[i-5]-1)
    c.stroke() 

  }
  if(teste[i]-teste[i-5]<100 && teste[i]-teste[i-5]>-100){
    c.beginPath();
    c.strokeStyle = "white"
    c.moveTo(teste[i],teste2[i])
    c.lineTo(teste[i-6]-1,teste2[i-6]-1)
    c.stroke() 

  }

    
  }
  
  this.update = function(){
    this.draw();
    if(this.x + 10 >= canvas.width || this.x - 10 <= 0){
    this.dx = -this.dx;
    }
    if(this.y + 10 >= canvas.height || this.y - 10 <= 0){
    this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y -= this.dy;
    teste[i] += this.dx
    teste2[i] -= this.dy

    
    
  }
}

var circleArray = [];
teste = []
teste2 = []
teste3 = []
teste4 = []



function init(){
  total = 25
  circleArray = [];
  teste = []
  teste2 = []
  for(var i = 0; i < total; i++){
    var r = Math.floor(Math.random() * 3) + 1 ;
    var x = Math.random() * (innerWidth - r*2) + r;
    var y = Math.random() * (innerHeight - r*2) + r;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    rad = Math.floor(Math.random()*7)
    if(rad<3){
      rad = 3
    }
    
    circleArray.push(new Circles(x, y, dx, dy,rad));

    teste.push(x)
    teste2.push(y)
    if(window.innerWidth>1900){
    total = 70
    }

  }

}
function animate(){
requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);
for(i = 0; i < circleArray.length ; i++){
  circleArray[i].update();    
}
}

animate();
init();
