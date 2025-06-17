// ...existing code...
const board = document.getElementById('board');
const size = 10;

// Array of pale colors
const paleColors = [
  '#fff9c4', // pale yellow
  '#c8e6c9', // pale green
  '#ffcdd2', // pale red
  '#b3e5fc', // pale blue
  '#f8bbd0', // pale pink
  '#d1c4e9', // pale purple
  '#ffe0b2', // pale orange
  '#cfd8dc'  // pale grey
];
for (let row = size - 1; row >= 0; row--) {
  let leftToRight = row % 2 === 0;
  for (let col = 0; col < size; col++) {
    let actualCol = leftToRight ? col : size - 1 - col;
    let number = row * size + actualCol + 1;
    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = number;
    // Randomly pick a pale color for each square
    const color = paleColors[Math.floor(Math.random() * paleColors.length)];
    square.style.background = color;
    square.dataset.square = number;
    board.appendChild(square);
  }
}

// Player counter logic
const playerCounters = [
  { color: 'red', position: 1, element: null },
  { color: 'blue', position: 1, element: null }
];

function createPlayerCounter(color) {
  const counter = document.createElement('div');
  counter.className = 'player-counter';
  counter.style.background = color;
  return counter;
}

function placeCounters() {
  // Remove old counters
  document.querySelectorAll('.player-counter').forEach(el => el.remove());

  // Find if both players are on the same square
  const sameSquare = playerCounters[0].position === playerCounters[1].position;

  playerCounters.forEach((player, idx) => {
    const square = document.querySelector(`.square[data-square="${player.position}"]`);
    if (square) {
      if (!player.element) {
        player.element = createPlayerCounter(player.color);
      }
      // Offset if both on same square
      player.element.style.position = 'absolute';
      player.element.style.top = sameSquare ? `${10 * idx}px` : '10px';
      player.element.style.left = '10px';
      player.element.style.zIndex = 10 + idx;
      square.style.position = 'relative';
      square.appendChild(player.element);
    }
  });

  // Dice roll logic
const die1El = document.getElementById('die1');
const die2El = document.getElementById('die2');
const rollDiceBtn = document.getElementById('roll-dice-btn');

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

rollDiceBtn.addEventListener('click', function() {
  const die1 = rollDie();
  const die2 = rollDie();
  die1El.textContent = die1;
  die2El.textContent = die2;
  const total = die1 + die2;
  // You can use `total` to move the player in your future logic
  console.log('Total rolled:', total);
});
}
