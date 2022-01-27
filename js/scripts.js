function Player1(roll, points, total) {
  this.roll = roll;
  this.points = points;
  this.total = total;

}

function Player2(roll, points, total) {
  this.roll = roll;
  this.points = points;
  this.total = total;

}

const player1 = new Player1(0, 0, 0);

const player2 = new Player2(0, 0, 0);



//Rolling Dice ------


function diceRollP1() {

  const diceRoll = Math.floor(Math.random() * 6) + 1;
  player1.roll = diceRoll;

  if (diceRoll !== 1) {
    player1.points += player1.roll;
    document.getElementById("rollP1").src = "../img/dice" + diceRoll + ".jfif";

    $("#player1Points").html("<span id='player1Points'><strong>" + player1.points + "</strong></span>");
    $("#player1Roll").html("<span id='player1Roll'><strong>" + player1.roll + "</strong></span>");
    $("#player1Total").html("<span id='player1Total'><strong>" + player1.total + "</strong></span>");
      
    if (player1.total + player1.points >= 9) {
      $("#player1wins").show();
      $(".content").hide();
      player1.points = 0;
      player1.roll = 0;
      player1.total = 0;
      player2.points = 0;
      player2.roll = 0;
      player2.total = 0;
      $("#player1Points").html("<span id='player1Points'><strong>0</strong></span>");
      $("#player1Roll").html("<span id='player1Roll'><strong>0</strong></span>");
      $("#player1Total").html("<span id='player1Total'><strong>0</strong></span>");
      $("#player2Points").html("<span id='player2Points'><strong>0</strong></span>");
      $("#player2Roll").html("<span id='player2Roll'><strong>0</strong></span>");
      $("#player2Total").html("<span id='player2Total'><strong>0</strong></span>");
    }

  } else if (diceRoll === 1) {
    player1.roll = 0;
    player1.points = 0;
    $("#player1Points").html("<span id='player1Points'><strong>" + player1.points + "</strong></span>");
    document.getElementById("rollP1").src = "../img/dice1.jfif";
    document.getElementById("p1Roll").disabled = true;
    document.getElementById("p1Hold").disabled = true;
    document.getElementById("p2Roll").disabled = false;
    document.getElementById("p2Hold").disabled = false;
  }
}

function diceRollP2() {

  const diceRoll = Math.floor(Math.random() * 6) + 1;
  player2.roll = diceRoll

  if (diceRoll !== 1) {
    player2.points += player2.roll;
    document.getElementById("rollP2").src = "../img/dice" + diceRoll + ".jfif";
    $("#player2Points").html("<span id='player2Points'><strong>" + player2.points + "</strong></span>");
    $("#player2Roll").html("<span id='player2Roll'><strong>" + player2.roll + "</strong></span>");
    $("#player2Total").html("<span id='player2Total'><strong>" + player2.total + "</strong></span>");
  
    if (player2.total + player2.points >= 9) {
      $("#player2wins").show();
      $(".content").hide();
      player1.points = 0;
      player1.roll = 0;
      player1.total = 0;
      player2.points = 0;
      player2.roll = 0;
      player2.total = 0;
      $("#player1Points").html("<span id='player1Points'><strong>0</strong></span>");
      $("#player1Roll").html("<span id='player1Roll'><strong>0</strong></span>");
      $("#player1Total").html("<span id='player1Total'><strong>0</strong></span>");
      $("#player2Points").html("<span id='player2Points'><strong>0</strong></span>");
      $("#player2Roll").html("<span id='player2Roll'><strong>0</strong></span>");
      $("#player2Total").html("<span id='player2Total'><strong>0</strong></span>");
    }

  } else if (diceRoll === 1) {
    player2.points = 0;
    player2.roll = 0;
    $("#player2Points").html("<span id='player2Points'><strong>" + player2.points + "</strong></span>");
    document.getElementById("rollP2").src = "../img/dice1.jfif";
    document.getElementById("p2Roll").disabled = true;
    document.getElementById("p2Hold").disabled = true;
    document.getElementById("p1Roll").disabled = false;
    document.getElementById("p1Hold").disabled = false;
  }
}

//Holding Dice-----

function P1Hold() {

  if ($("button#p1Hold")) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    player1.total = player1.points + player1.total;
    player1.points = 0;
    player1.roll = 0;
    $("#player1Points").html("<span id='player1Points'><strong>" + player1.points + "</strong></span>");
    $("#player1Roll").html("<span id='player1Roll'><strong>" + player1.roll + "</strong></span>");
    $("#player1Total").html("<span id='player1Total'><strong>" + player1.total + "</strong></span>");
    document.getElementById("p1Roll").disabled = true;
    document.getElementById("p1Hold").disabled = true;
    document.getElementById("p2Roll").disabled = false;
    document.getElementById("p2Hold").disabled = false;
  }
}

function P2Hold() {

  if ($("button#p2Hold")) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    player2.total = player2.points + player2.total;
    player2.points = 0;
    player2.roll = 0;
    $("#player2Points").html("<span id='player2Points'><strong>" + player2.points + "</strong></span>");
    $("#player2Roll").html("<span id='player2Roll'><strong>" + player2.roll + "</strong></span>");
    $("#player2Total").html("<span id='player2Total'><strong>" + player2.total + "</strong></span>");
    document.getElementById("p2Roll").disabled = true;
    document.getElementById("p2Hold").disabled = true;
    document.getElementById("p1Roll").disabled = false;
    document.getElementById("p1Hold").disabled = false;
  }
}


$(document).ready(function() {

  const player1Roll = $("button#p1Roll").val();
  const player2Roll = $("button#p2Roll").val();

  $("button#p1Roll").click(function(event) {
    event.preventDefault();
    diceRollP1($("button#p1Roll"));
  });

  $("button#p2Roll").click(function(event) {
    event.preventDefault();
    diceRollP2($("button#p2Roll"));
  });

  $("button.player1-hold").click(function(event) {
    event.preventDefault();
    P1Hold($("button#p1Hold"));
  });

  $("button.player2-hold").click(function(event) {
    event.preventDefault();
    P2Hold($("button#p2Hold"));
  });

  $("img.show-game").click(function(event) {
    event.preventDefault();
    $("#player1wins").hide();
    $("#player2wins").hide();
    $(".content").toggle().show();
    
  });

});