export interface IMatrixData {
  grid: Array<Array<number>>;
  endLocation: Array<number>;
  startLocation: Array<number>;
}

export interface IConfig {
  production: boolean;
  boardSize: IBoardSize;
  squareWidth: number;
}

export interface IBoardSize {
  rows: number;
  columns: number;
}
