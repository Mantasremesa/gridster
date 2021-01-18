import { Square } from '../entities/square';
import { IBoardSize } from './common';

export interface ILoadBoardAction {
  board: Array<Array<Square>>;
  boardSize: IBoardSize;
}

export interface IToggleSelectAction {
  rowIndex: number;
  columnIndex: number;
}

export interface ISetPathAction {
  path: Array<number>;
}

export interface IClearPathAction {
  gridSize: {
    x: number;
    y: number;
  };
}

export interface IGenerateMatrixAction {
  startPoint: Array<number>;
  endPoint: Array<number>;
}

// tslint:disable-next-line:no-empty-interface
export interface ISetStartAction extends IToggleSelectAction {}
