function Player1(roll, total, points) {
  this.roll = roll;
  this.total = total;
  this.points = points;
}
function Player2(roll, total, points) {
  this.roll = roll;
  this.total = total;
  this.points = points;
}

const player1 = new Player1(0,0,0);

const player2 = new Player2(0,0,0);



//Rolling Dice ------


function diceRollP1() {

  const diceRoll = Math.floor( Math.random() * 6 ) +1;
  player1.roll = diceRoll;
  
  if (diceRoll !== 1) { 
    player1.points = player1.roll;
    document.getElementById("rollP1").src = "../img/dice" + diceRoll + ".png";

  } else if (diceRoll === 1) {
    player1.roll = 0;
    document.getElementById("rollP1").src = "../img/dice1.png";

  } else if (player1.roll >= 100 || player1.points >= 100) {
    alert("Player 1 Wins!!!");
  }
  console.log(player1);

}

function diceRollP2() {
  
  const diceRoll = Math.floor( Math.random() * 6 ) +1;
  player2.roll = diceRoll
  
  if (diceRoll !== 1) { 
    player2.roll = (diceRoll + player2.roll);
    document.getElementById("rollP2").src = "../img/dice" + diceRoll + ".png";

  } else if (diceRoll === 1) {
    player2.roll = 0;
    document.getElementById("rollP2").src = "../img/dice1.png";

  } else if (player2.roll >= 100 || player2.points >= 100) {
    alert("Player 2 Wins!!!");
  }
  console.log(player2);

}

//Holding Dice-----

function P1Hold() {
  
  if ($("button#p1Hold")) {
    const diceRoll = Math.floor( Math.random() * 6 ) +1;
    player1.points = (player1.roll + player1.total);
    document.getElementById("p1Roll").disabled = true;
    document.getElementById("p1Hold").disabled = true;
    document.getElementById("p2Roll").disabled = false;
    document.getElementById("p2Hold").disabled = false;
    console.log(player1.total);
    console.log(player1.roll);
    console.log(player1.points);
  }
}

function P2Hold() {
  if ($("button#p2Hold")) {
    const diceRoll = Math.floor( Math.random() * 6 ) +1;
    player2.points = (player2.roll + player2.total); 
    document.getElementById("p2Roll").disabled = true;
    document.getElementById("p2Hold").disabled = true;
    document.getElementById("p1Roll").disabled = false;
    document.getElementById("p1Hold").disabled = false;
    console.log(player2.total);
    console.log(player2.roll);
    console.log(player2.points);
  }
}


$(document).ready(function(){

 

  const player1Roll = $("button#p1Roll").val();
  const player2Roll = $("button#p2Roll").val();

  $("button#p1Roll").click(function(event){
    event.preventDefault();
    diceRollP1($("button#p1Roll"));
    
  });

    $("button#p2Roll").click(function(event){
      event.preventDefault();
      diceRollP2($("button#p2Roll"));

    });

  $("form#player1-hold").click(function(event){
    event.preventDefault();
    P1Hold($("button#p1Hold"));
    
  });

    $("form#player2-hold").click(function(event){
      event.preventDefault();
      P2Hold($("button#p2Hold"));

    });

});