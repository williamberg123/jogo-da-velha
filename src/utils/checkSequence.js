const sequenceInRow = (array) => (array.includes(0) && array.includes(1) && array.includes(2)) ||
(array.includes(3) && array.includes(4) && array.includes(5)) ||
(array.includes(6) && array.includes(7) && array.includes(8));

const sequenceInColumn = (array) => (array.includes(0) && array.includes(3) && array.includes(6)) ||
(array.includes(1) && array.includes(4) && array.includes(7)) ||
(array.includes(2) && array.includes(5) && array.includes(8));

const sequenceInDiagonal = (array) => (array.includes(0) && array.includes(4) && array.includes(8)) ||
(array.includes(2) && array.includes(4) && array.includes(6));

export default function checkWinner(indexesArray){
    return sequenceInRow(indexesArray) ||
sequenceInColumn(indexesArray) || sequenceInDiagonal(indexesArray);
}
