var content = document.getElementById('content');
var winStatus = document.getElementById('win');
var replay = document.getElementById("replay");

//object representing game state
var state = {
    whoseTurn: "X",
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
};

//put the generated HTML into the #content div
content.innerHTML = renderGame(state);
//render HTML from game object information
function renderGame(game) {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4 class="mt-4">It's player ${game.whoseTurn}'s turn!</h4>
            <div class="w-50 text-center mt-5">
                <button id="a" onclick="setValue(this)">${game.board[0][0]}</button>
                <button id="b" onclick="setValue(this)">${game.board[0][1]}</button>
                <button id="c" onclick="setValue(this)">${game.board[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="d" onclick="setValue(this)">${game.board[1][0]}</button>
                <button id="e" onclick="setValue(this)">${game.board[1][1]}</button>
                <button id="f" onclick="setValue(this)">${game.board[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="g" onclick="setValue(this)">${game.board[2][0]}</button>
                <button id="h" onclick="setValue(this)">${game.board[2][1]}</button>
                <button id="i" onclick="setValue(this)">${game.board[2][2]}</button>
            </div>
        </div>
    `
}

function renderWin(player) {
    if (player === "tie") {
        winStatus.innerHTML = `Cat's Game!`
    } else {
        winStatus.innerHTML = `Player ${player} wins!`
    }
    replay.innerHTML = `<button onclick="renderNewGame()" class="btn btn-success m-0-auto" style="width: auto">Play Again?</button>`
}

//adds X or O to clicked button based on whose turn it is, changes whoseTurn value, renders updated game board
function setValue(button) {
    switch (button.id) {
        case "a":
            state.board[0][0] = state.whoseTurn;
            break;
        case "b":
            state.board[0][1] = state.whoseTurn;
            break;
        case "c":
            state.board[0][2] = state.whoseTurn;
            break;
        case "d":
            state.board[1][0] = state.whoseTurn;
            break;
        case "e":
            state.board[1][1] = state.whoseTurn;
            break;
        case "f":
            state.board[1][2] = state.whoseTurn;
            break;
        case "g":
            state.board[2][0] = state.whoseTurn;
            break;
        case "h":
            state.board[2][1] = state.whoseTurn;
            break;
        case "i":
            state.board[2][2] = state.whoseTurn;
            break;
    } 

    checkWin(state.whoseTurn); 
    if (state.whoseTurn === "X") {
        state.whoseTurn = "O";
    } else {
        state.whoseTurn = "X";
    }
    content.innerHTML = renderGame(state);  
}

//check the board to see if any win conditions are met or if it is a tie
function checkWin(turn) {
    if (state.board[0].join("") === "XXX" || state.board[0].join("") === "OOO") {
        renderWin(state.board[0][0]);
    } else if (state.board[1].join("") === "XXX" || state.board[1].join("") === "OOO") {
        renderWin(state.board[1][0]);
    } else if (state.board[2].join("") === "XXX" || state.board[2].join("") === "OOO") {
        renderWin(state.board[2][0]);
    } else if (state.board[0][0] === turn && turn === state.board[1][0] && turn === state.board[2][0]) {
        renderWin(state.board[0][0]);
    } else if (state.board[0][1] === turn && turn === state.board[1][1] && turn === state.board[2][1]) {
        renderWin(state.board[0][1]);
    } else if (state.board[0][2] === turn && turn === state.board[1][2] && turn === state.board[2][2]) {
        renderWin(state.board[0][2]);
    } else if (state.board[0][0] === turn && turn === state.board[1][0] && turn === state.board[2][0]) {
        renderWin(state.board[0][0]);
    } else if (state.board[0][0] === turn && turn === state.board[1][1] && turn === state.board[2][2]) {
        renderWin(state.board[0][0]);
    } else if (state.board[0][2] === turn && turn === state.board[1][1] && turn === state.board[2][0]) {
        renderWin(state.board[0][2]);
    } else if (state.board[0].includes("") === false && state.board[1].includes("") === false && state.board[2].includes("") === false) {
        renderWin("tie");
    }
}

function renderNewGame() {
    state = {
        whoseTurn: "X",
        board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
    };
    content.innerHTML = renderGame(state);
    replay.innerHTML = "";
    winStatus.innerHTML = "Who will win?"
}