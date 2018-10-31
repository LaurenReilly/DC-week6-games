var content = document.getElementById('content');

var state = {
    whoseTurn: "X",
    isGameOver: false,
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
};

content.innerHTML = renderGame(state);

function renderGame(game) {
    // Change this render function to use the "game" parameter
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player ${game.whoseTurn}'s turn!</h4>
            <div class="w-50 text-center">
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
    if (state.whoseTurn === "X") {
        state.whoseTurn = "O";
    } else {
        state.whoseTurn = "X";
    }
    content.innerHTML = renderGame(state);
}

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var buttonE = document.getElementById("e");
var buttonF = document.getElementById("f");
var buttonG = document.getElementById("g");
var buttonH = document.getElementById("h");
var buttonI = document.getElementById("i");