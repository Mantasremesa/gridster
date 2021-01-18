import { IBoardSize } from '../dtos/common';
import { Square } from '../entities/square';

export class BoardGenerator {

  public createBoard(boardSize: IBoardSize): Array<Array<Square>> {
    const defaultStatus: string = 'fill';
    const board: Array<Array<Square>> = new Array<Array<Square>>();
    let id: number = 1;

    for (let row: number = 0; row < boardSize.rows; row++) {
      board[row] = new Array<Square>();
      for (let column: number = 0; column < boardSize.columns; column++) {
        id++;
        const squareTmp: Square = new Square(id, row, column, defaultStatus);
        board[row].push(squareTmp);
      }
    }

    return board;
  }

  public generateStartSquare(board: Array<Array<Square>>, rows: number): Array<number> {
    const randomRow: number = this.randomInt(0, rows - 1);
    board[randomRow][0].markAsStart();
    return [randomRow, 0];
  }

  public generateEndSquare(board: Array<Array<Square>>, boardSize: IBoardSize): Array<number> {
    const randomRow: number = this.randomInt(0, boardSize.rows - 1);
    board[randomRow][boardSize.columns - 1].markAsEnd();
    return [randomRow, boardSize.columns - 1];
  }

  private randomInt(a: number, b: number): number {
    const lower: number = Math.ceil(Math.min(a, b));
    const upper: number = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  }
}
