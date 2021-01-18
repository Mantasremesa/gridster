import { createSelector, MemoizedSelector } from '@ngrx/store';
import { IAppState, IRootState } from '../dtos/app-state';
import { IBoardSize, IMatrixData } from '../dtos/common';
import { Square } from '../entities/square';

export const getBoard: MemoizedSelector<object, Array<Array<Square>>> = createSelector(
  (state: IRootState): IAppState => state.rootState,
  (state: IAppState): Array<Array<Square>> => state.board,
);

export const getBoardSize: MemoizedSelector<object, IBoardSize> = createSelector(
  (state: IRootState): IAppState => state.rootState,
  (state: IAppState): IBoardSize => state.boardSize,
);

export const getMatrix: MemoizedSelector<object, IMatrixData> = createSelector(
  (state: IRootState): IAppState => state.rootState,
  (state: IAppState): IMatrixData => state.matrix,
);
