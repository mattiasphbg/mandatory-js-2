
let players=[];
let gameMessage;
let markers=["X","O"];
let points=[0,0];
let whoseTurn = 0;
let GameOver;
const winValues = [7,56,73,84,146,273,292,448];
players[0] = "Joe";
players[1] = "Doe";


function resetGame()  {
  gameMessage = document.getElementById("game-display").innerText ="Tic Tac toe";
  drawBoard();
  GameOver = false;
  points = [0,0];
}

function drawBoard()  {
  
  let display="";
  let binaryCount = 1;
  
  for (let i = 1; i <=3; i++) {
    display += '<div id="row-' +i+ '">';
    for (let j = 0; j < 3; j++) {
     display += '<div onclick="play(this,'+binaryCount+');">&nbsp;</div>';
      binaryCount = binaryCount * 2;
    }

    display += "</div>";
  }  
  document.getElementById("game-board").innerHTML = display;
}

 function updateGameMessage(message=false)  {
   gameMessage = document.getElementById("game-display");
  if(!message)  {
    gameMessage.innerText =  players[whoseTurn] + "'s turn";
  } else{
    gameMessage.innerText = message;
  }
 }


function winCheck()  {
  for(let i = 0; i < winValues.length; i++)  {
    if((points[whoseTurn] & winValues[i]) == winValues[i])  {
      alert(players[whoseTurn] + "Wins!");
      updateGameMessage(players[whoseTurn] + "Wins!");
      GameOver = true;      
    }
  }
  if (((points[0] + points[1]) == 511) && !GameOver) {
     
     updateGameMessage(players[whoseTurn] + "Cat Wins!");
     GameOver = true;

  }
}
 

 function play(clickedDiv, divValue)  {
   
    if(!GameOver){

     points[whoseTurn] += divValue;
     
    if(clickedDiv.innerHTML == "&nbsp;") {
       
       clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
       winCheck();
    if(!GameOver) {togglePlayer();}
     
      }
     
    } 
      
    }

  function togglePlayer()  {
  if(whoseTurn == 0)  { 
    whoseTurn = 1;
  } else{whoseTurn = 0;}
  updateGameMessage()
  
}

