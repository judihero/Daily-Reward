// script.js
let currentPoints = 0;

function addPoints(points) {
    currentPoints += points;
    document.getElementById('points').textContent = currentPoints;
    alert(`You've earned ${points} points! Total: ${currentPoints}`);
}
