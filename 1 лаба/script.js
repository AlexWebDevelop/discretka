let inc = [
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
  [-1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, -1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, -1, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1, 1, 0, 2],
  [0, 0, 0, 0, 1, 1, -1, -1, 0, 0, 1, 1, 0, 0, 0],
]
let smej = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

function getColumn(notNeededRow, currentColumn) {
  for (let i = 0; i < 7; i++) {
    if (
      i != notNeededRow &&
      (inc[i][currentColumn] == -1 || inc[i][currentColumn] == 1)
    ) {
      return i
    }
  }
}

for (let i = 0; i < inc.length; i++) {
  for (let j = 0; j < inc[i].length; j++) {
    if (inc[i][j] == 2) {
      smej[i][i] = 1
    } else if (inc[i][j] == 1) {
      smej[i][getColumn(i, j)] = 1
    }
  }
}

console.log(inc)
console.log(smej)
