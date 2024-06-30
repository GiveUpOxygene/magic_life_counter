var player1Name = "Player 1";
var player2Name = "Player 2";
var player3Name = "Player 3";
var player4Name = "Player 4";
var player1Life = 40;
var player2Life = 40;
var player3Life = 40;
var player4Life = 40;

// Function to decrease life points for a player
function decreaseLife1(player, amount) {
    switch (player) {
        case 1:
            player1Life -= amount;
            break;
        case 2:
            player2Life -= amount;
            break;
        case 3:
            player3Life -= amount;
            break;
        case 4:
            player4Life -= amount;
            break;
    }
    updatePlayerLifeDisplay();
}

// Function to increase life points for a player
function increaseLife1(player, amount) {
    switch (player) {
        case 1:
            player1Life += amount;
            break;
        case 2:
            player2Life += amount;
            break;
        case 3:
            player3Life += amount;
            break;
        case 4:
            player4Life += amount;
            break;
    }
    updatePlayerLifeDisplay();
}

function changePlayerName(player, event) {
    if (event.keyCode === 13 || event.type === 'blur') {
        switch (player) {
            case 1:
                player1Name = event.target.value;
                break;
            case 2:
                player2Name = event.target.value;
                break;
            case 3:
                player3Name = event.target.value;
                break;
            case 4:
                player4Name = event.target.value;
                break;
        }
        if (window.location.pathname === '/index.html'){
            updatePlayerNames();
        }
    }
    document.getElementById("p1-change").value = player1Name;
}

// Function to display the current life points for both players
function displayLifePoints() {
    console.log(`${player1Name}: ${player1Life}`);
    console.log(`${player2Name}: ${player2Life}`);
}

function updatePlayerLifeDisplay() {
    document.getElementById("p1-life").innerHTML = player1Life;
    document.getElementById("p2-life").innerHTML = player2Life;
    document.getElementById("p3-life").innerHTML = player3Life;
    document.getElementById("p4-life").innerHTML = player4Life;
}

// update player names

function updatePlayerNames() {
    document.getElementById("p1-name").innerHTML = player1Name;
    document.getElementById("p2-name").innerHTML = player2Name;
    document.getElementById("p3-name").innerHTML = player3Name;
    document.getElementById("p4-name").innerHTML = player4Name;
}



document.addEventListener('DOMContentLoaded', function () {
    const pathname = window.location.pathname;
    if (pathname === '/index.html') {
        updatePlayerLifeDisplay();
        updatePlayerNames();
    }
}

);