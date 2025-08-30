const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

function player1(){
    if(randomNumber1===1){
        document.querySelector(".img1").setAttribute("src","dice1.png");
    }
    if(randomNumber1===2){
        document.querySelector(".img1").setAttribute("src","dice2.png");
    }
    if(randomNumber1===3){
        document.querySelector(".img1").setAttribute("src","dice3.png");
    }
    if(randomNumber1===4){
        document.querySelector(".img1").setAttribute("src","dice4.png");
    }
    if(randomNumber1===5){
        document.querySelector(".img1").setAttribute("src","dice5.png");
    }
    if(randomNumber1===6){
        document.querySelector(".img1").setAttribute("src","dice6.png");
    }
}

function player2(){
    if(randomNumber2===1){
        document.querySelector(".img2").setAttribute("src","dice1.png");
    }
    if(randomNumber2===2){
        document.querySelector(".img2").setAttribute("src","dice2.png");
    }
    if(randomNumber2===3){
        document.querySelector(".img2").setAttribute("src","dice3.png");
    }
    if(randomNumber2===4){
        document.querySelector(".img2").setAttribute("src","dice4.png");
    }
    if(randomNumber2===5){
        document.querySelector(".img2").setAttribute("src","dice5.png");
    }
    if(randomNumber2===6){
        document.querySelector(".img2").setAttribute("src","dice6.png");
    }
}

player1();
player2();


function winner(){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS!!";
    }
    if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="PLAYER 2 WINS🚩!!";
    }
    if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="DRAW!";
    }
}

winner();

document.getElementById('refreshButton').addEventListener('click', function() {
      location.reload();
    });