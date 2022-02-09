export function checkWinner(gridValues) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      gridValues[a] &&
      gridValues[a] === gridValues[b] &&
      gridValues[a] === gridValues[c]
    ) {
      return `${gridValues[a]} wins`;
    } else if (!gridValues.includes(null)) {
      return `It's a draw`;
    }
  }
  return null;
}
