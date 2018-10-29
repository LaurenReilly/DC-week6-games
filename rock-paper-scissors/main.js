var content = document.getElementById('content');

//game Object
var rockPaperScissors = {
    computer: "",
    player: "",
    winStatus: ""
}

//references to each button
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var replay = document.getElementById("replay");

//set player weapon, set random computer weapon, render game screen again, then check for win conditions
function setWeapon(weapon) {
    rockPaperScissors.player = weapon;
    computerChoice();
    checkWin(rockPaperScissors);
}

//checking for each win condition and then render board again
function checkWin(game) {
    if (game.player === game.computer) {
        game.winStatus = "Draw";
    } else if (game.player === "rock" && game.computer === "paper") {
        game.winStatus = "Computer Wins";

    } else if (game.player === "rock" && game.computer === "scissors") {
        game.winStatus = "Player Wins";

    } else if (game.player === "paper" && game.computer === "rock") {
        game.winStatus = "Player Wins";

    } else if (game.player === "paper" && game.computer === "scissors") {
        game.winStatus = "Computer Wins";

    } else if (game.player === "scissors" && game.computer === "rock") {
        game.winStatus = "Computer Wins";

    } else if (game.player === "scissors" && game.computer === "paper") {
        game.winStatus = "Player Wins";
    }
    content.innerHTML = renderGame(rockPaperScissors);
}

//randomly choose one of three weapons for the computer
function computerChoice() {
    var weapons = ["rock", "paper", "scissors"];
    var weapon = weapons[Math.floor(Math.random() * weapons.length)];
    rockPaperScissors.computer = weapon;
}

//click events for buttons
rock.addEventListener("click", function() {
    var weapon = "rock";
    setWeapon(weapon);
});

paper.addEventListener("click", function() {
    var weapon = "paper";
    setWeapon(weapon);
});

scissors.addEventListener("click", function() {
    var weapon = "scissors";
    setWeapon(weapon);
});

//click replay button, resets game object values to empty strings and renders game screen
replay.addEventListener("click", function() {
    rockPaperScissors.player = "";
    rockPaperScissors.computer = "";
    rockPaperScissors.winStatus = "";
    content.innerHTML = renderGame(rockPaperScissors);
});

//render game to screen
function renderGame(game) {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button type="button" class="btn btn-primary" id="rock">Rock</button>
                <button type="button" class="btn btn-primary" id="paper">Paper</button>
                <button type="button" class="btn btn-primary" id="scissors">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${game.player}</b></div>
                <div class="m-5">The computer played: <b>${game.computer}</b></div>
            </div>
            <h1 class="text-center">${game.winStatus}</h1>
            <button type="button" class="btn btn-primary" id="replay">Play Again?</button>
        </div>
    `
}
