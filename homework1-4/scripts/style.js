let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test1.jpeg') {
      myImage.setAttribute('src', 'images/1.jpg');
    } else {
      myImage.setAttribute('src', 'images/test1.jpeg');
    }
} 

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;


function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

let myButton1 = document.querySelector('button'); 
myButton1.onclick = setUserName;

function random(number){
  return Math.floor(Math.random()*number);
}

function myfunction(){
  alert("hello");
}

// myfunction()