const board = document.getElementById('board');
const size = 10;
for (let row = size - 1; row >= 0; row--) {
  let leftToRight = row % 2 === 0;
  for (let col = 0; col < size; col++) {
    let actualCol = leftToRight ? col : size - 1 - col;
    let number = row * size + actualCol + 1;
    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = number;
    // Alternate between three colors
    const colorIndex = (row + actualCol) % 3;
    if (colorIndex === 0) {
      square.style.background = '#fff9c4'; // pale yellow
    } else if (colorIndex === 1) {
      square.style.background = '#c8e6c9'; // pale green
    } else {
      square.style.background = '#ffcdd2'; // pale red
    }
    board.appendChild(square);
  }
}