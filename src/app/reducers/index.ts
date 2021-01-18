import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';
import {
  clearPathAction,
  generateMatrixAction,
  loadBoardAction,
  setPathAction,
  setStartAction,
  toggleSelectAction,
} from '../actions';
import {
  IClearPathAction,
  IGenerateMatrixAction,
  ILoadBoardAction,
  ISetPathAction,
  ISetStartAction,
  IToggleSelectAction,
} from '../dtos/app-actions';
import { IAppState } from '../dtos/app-state';

const initialState: IAppState = {
  board: [],
  boardSize: {
    rows: 0,
    columns: 0,
  },
  matrix: {
    grid: [],
    startLocation: [],
    endLocation: [],
  },
};

const boardReducer: ActionReducer<IAppState> = createReducer(initialState,
  on(loadBoardAction, (state: IAppState, action: ILoadBoardAction): IAppState  => {
    return Object.assign(
        {},
        initialState,
        {
          board: action.board,
          boardSize: action.boardSize,
        },
    );
  }),
  on(toggleSelectAction, (state: IAppState, action: IToggleSelectAction): IAppState => {
    const newState: IAppState = _.cloneDeep(state);
    newState.board[action.rowIndex][action.columnIndex].toggleSelect();
    return {...newState };
  }),
  on(setStartAction, (state: IAppState, action: ISetStartAction): IAppState => {
    const newState: IAppState = _.cloneDeep(state);
    newState.board[action.rowIndex][action.columnIndex].markAsStart();
    return {...newState };
  }),
  on(setPathAction, (state: IAppState, action: ISetPathAction): IAppState => {
    const newState: IAppState = _.cloneDeep(state);
    _.forEach(action.path, (value: Array<number>): void => {
      newState.board[value[1]][value[0]].markAsPath();
    });
    return {...newState };
  }),
  on(clearPathAction, (state: IAppState, action: IClearPathAction): IAppState => {
    const newState: IAppState = _.cloneDeep(state);
    for (let row: number = 0; row < action.gridSize.y; row++) {
      for (let column: number = 0; column < action.gridSize.x; column++) {
        newState.board[row][column].clearPath();
      }
    }
    return {...newState };
  }),
  on(generateMatrixAction, (state: IAppState, action: IGenerateMatrixAction): IAppState => {
    const matrix: Array<Array<number>> = matrixGenerator(state.boardSize.rows, state.boardSize.columns);
    return {
      ...state,
      matrix: {
        grid: matrix,
        startLocation: action.startPoint,
        endLocation: action.endPoint,
      },
    };
  }),
);

function matrixGenerator(rows: number, columns: number): Array<Array<number>> {
  return Array.from(
    { length: rows },
    (): Array<number> => new Array(columns).fill(1));
}

export function getBoardReducer(state: IAppState, action: Action): IAppState {
  return boardReducer(state, action);
}
