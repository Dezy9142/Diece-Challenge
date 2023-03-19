var randomNumber1=Math.random();
var dicenumber=Math.floor(randomNumber1*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + dicenumber + ".png");

var randomNum=Math.random();
var number=Math.floor(randomNum*6)+1;
 document.querySelector(".img2").setAttribute("src", "images/dice" + number + ".png");

 if(dicenumber===number){
    document.querySelector("h1").textContent="Draw!";
 }
 else if(dicenumber > number){
    document.querySelector("h1").textContent="🚩Player1 Wins!";
 }
 else{
    document.querySelector("h1").textContent="Player2 Wins!🚩";
 }