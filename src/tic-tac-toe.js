class TicTacToe {
    matrixSize = 3;
    playerSymbols = ['x', 'o'];

    constructor() {
        this.matrix = Array(this.matrixSize).fill(null).map(el => Array(this.matrixSize).fill(null));
        this.currentPlayerSymbol = this.playerSymbols[0];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.playerSymbols.reverse()[0];
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        let diagonals = [new Set(), new Set()];
        for (let i = 0; i < this.matrixSize; i++) {
            let row = new Set(this.matrix[i]);
            if ([...row.values()].length === 1) {
                return [...row.values()][0];
            }

            let column = new Set();
            for (let k = 0; k < this.matrixSize; k++) {
                column.add(this.matrix[k][i]);
            }
            if ([...column.values()].length === 1) {
                return [...column.values()][0];
            }
            diagonals[0].add(this.matrix[i][i]);
            diagonals[1].add(this.matrix[this.matrixSize - i - 1][i]);
        }

        for (let diagonal of diagonals) {
            if ([...diagonal.values()].length === 1) {
                return [...diagonal.values()][0];
            }
        }

        return null;
    }

    noMoreTurns() {
        return !this.matrix.some(el => el.some(symbol => symbol === null));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;