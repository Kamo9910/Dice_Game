function rollDice(){
    let dice1Value = Math.floor(Math.random()*6 + 1);
    let dice2Value = Math.floor(Math.random()*6 + 1 );

    document.getElementById("dice1").src ="dice"+dice1Value+".png";

    document.getElementById("dice2").src ="dice"+dice2Value+".png";

    if (dice1Value > dice2Value) {
        document.querySelector("h1").innerHTML ="Player1 Wins!!"
    }

    else if (dice1Value< dice2Value){
        document.querySelector("h1").innerHTML ="Player2 Wins!!"
    }

    else{
        document.querySelector("h1").innerHTML ="Draw!!"
    }
}
 