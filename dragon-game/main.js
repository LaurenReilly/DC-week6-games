//human vs dragon
//beginning of game equip a weapon
//weapons have type ice/fire/lightning

//random dragon will show up at game start
//dragon has type ice/fire/lightning

//hero and dragon take turns attacking eachother
//attack damage depends on weapon type and type of dragon

//hero and dragon each have HP hero = 100, dragon = 120
//BONUS implement critical hit

var types = ["fire", "ice", "lightning"];

var state = {
    player: {
        hp: 100,
        weaponType: ""
    },
    dragon: {
        hp: 120,
        dragonType: randomType()
    },
    playerNeedsToPickWeapon: true,
    isGameOver: false
};

function randomType() {
    var dragonType = types[Math.floor(Math.random() * types.length)];
    console.log(dragonType);
    return dragonType;
}

function renderGame() {
    var gameHTML;

    if (state.playerNeedsToPickWeapon) {
        //render the choose your weapon screen
        gameHTML = renderPickWeaponScreen();
    } else if (!state.isGameOver) {
        //render the attack dragon screen
        gameHTML = renderAttackScreen();
    } else {
        //render game over screen
        gameHTML = renderGameOverScreen();
    }
    document.getElementById("game").innerHTML = gameHTML;
}

function renderPickWeaponScreen() {
    var weaponScreenHTML = `
        <p>Choose Your Weapon</p>
        <button onclick="pickWeapon('fire')" type="button" id="fire">Fire</button>
        <button onclick="pickWeapon('ice')" type="button" id="ice">Ice</button>
        <button onclick="pickWeapon('lightning')" type="button" id="lightning">Lightning</button>
    `
    return weaponScreenHTML;
}

function renderAttackScreen() {
    var renderAttackHTML = `
        <h1>Player</h1>
        <p>Weapon Type: ${state.player.weaponType}</p>
        <p>Health: ${state.player.hp}</p>
        <h1>Dragon</h1>
        <p>Type: ${state.dragon.dragonType}</p>
        <p>Health: ${state.dragon.hp}</p>
        <button onclick="attack()">ATTACK!</button>
    `
    return renderAttackHTML;
}

function attack() {
    if (state.player.weaponType === state.dragon.dragonType) {
        state.player.hp -= 10;
        state.dragon.hp -= 10;
    } else if (state.player.weaponType === "fire" && state.dragon.dragonType === "ice") {
        state.player.hp -= 10;
        state.dragon.hp -= 30;

    } else if (state.player.weaponType === "fire" && state.dragon.dragonType === "lightning") {
        state.player.hp -= 30;
        state.dragon.hp -= 10;

    } else if (state.player.weaponType === "ice" && state.dragon.dragonType === "fire") {
        state.player.hp -= 30;
        state.dragon.hp -= 10;

    } else if (state.player.weaponType === "ice" && state.dragon.dragonType === "lightning") {
        state.player.hp -= 10;
        state.dragon.hp -= 30;

    } else if (state.player.weaponType === "lightning" && state.dragon.dragonType === "fire") {
        state.player.hp -= 10;
        state.dragon.hp -= 30;

    } else if (state.player.weaponType === "lightning" && state.dragon.dragonType === "ice") {
        state.player.hp -= 30;
        state.dragon.hp -= 10;
    }
    //critical hit
    if (Math.random() >= .9) {
        state.dragon.hp -= 10;
    }

    if (state.player.hp <= 0 || state.dragon.hp <= 0) {
        state.isGameOver = true;
    }
   

    renderGame();
}

function renderGameOverScreen() {
    var gameOverHTML;
    if (state.dragon.hp <= 0) {
        gameOverHTML = `
            <p>You hath Slain the beast</p>
        `
    } else if (state.player.hp <= 0) {
        gameOverHTML = `
            <p>The dragon lives to see another day</p>
        `
    }
    return gameOverHTML;
}

renderGame();

function pickWeapon(type) {
    state.player.weaponType = type;
    state.playerNeedsToPickWeapon = false;
    renderGame();
}

