import { createAction, props } from '@ngrx/store';
import { IBoardSize } from '../dtos/common';
import { Square } from '../entities/square';

export const generateBoardAction = createAction('[Board] Generate', props<{
  boardSize: IBoardSize,
}>());

export const generateMatrixAction = createAction('[Matrix] Generate', props<{
  startPoint: Array<number>,
  endPoint: Array<number>,
}>());

export const loadBoardAction = createAction('[Board] Load', props<{
  board: Array<Array<Square>>,
  boardSize: IBoardSize,
}>());

export const toggleSelectAction = createAction('[Board] Toggle Square', props<{
  rowIndex: number,
  columnIndex: number,
}>());

export const setStartAction = createAction('[Board] Set start Square', props<{
  rowIndex: number,
  columnIndex: number,
}>());

export const setPathAction = createAction('[Board] Set path', props<{
  path: Array<number>,
}>());

export const clearPathAction = createAction('[Board] Clear path', props<{
  gridSize: {
    x: number,
    y: number,
  },
}>());
