import { Square } from '../entities/square';
import { IBoardSize, IMatrixData } from './common';

export interface IRootState {
  rootState: IAppState;
}

export interface IAppState {
  board: Array<Array<Square>>;
  boardSize: IBoardSize;
  matrix: IMatrixData;
}

export interface IBoardState {
  board: Array<Array<Square>>;
  startPoint: Array<number>;
  endPoint: Array<number>;
}
