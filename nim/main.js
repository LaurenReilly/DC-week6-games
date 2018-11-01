var content = document.getElementById('content');
var pebbleContainer = document.getElementById('pebbleContainer');

var nim = {
    player: 1,
    pebbleCount: 16
}

content.innerHTML = renderGame(nim);


function renderGame(game) {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are ${game.pebbleCount} pebbles left</h4>
            <div class="w-50 text-center" id="pebbleContainer">
                ${renderPebbles(game.pebbleCount)}
            </div>
            <h4 class="mt-5">It's player ${game.player}'s turn! How many pebbles will you take?</h4>
            <div>
                <form name="pebbleForm">
                    <select name="pebbleSelect" id="takeInput">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button for="takeInput" type="button" onclick="removePebbles(pebbleSelect.value)" class="btn btn-primary">Take</button>
                </form>
            </div>
        </div>
    `
}

function removePebbles(pebbles) {
    nim.pebbleCount -= pebbles;
    if (nim.pebbleCount === 0) {
       content.innerHTML = renderWin(nim.player);
       return;
    }
    if (nim.player === 1) {
        nim.player = 2;
    } else {
        nim.player = 1;
    }
    content.innerHTML = renderGame(nim);
}

function renderPebbles(count) {
    var pebble = `<div class="pebble m-2"></div>`;
    var pebbles = [];
    for(var i = 0; i < count; i++) {
        pebbles.push(pebble);
    }
    return pebbles.join("");
}

function renderWin(winner) {
    return `
        <h1 class="text-center text-success">The Winner is: Player${winner}</h1>
    `
}