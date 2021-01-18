import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import {
  generateBoardAction,
  generateMatrixAction,
  loadBoardAction,
} from './actions';
import { IAppState, IBoardState } from './dtos/app-state';
import { getBoard } from './selectors';
import { BoardService } from './services/board.service';

@Injectable()
export class AppEffects {

  private generateBoard: CreateEffectMetadata = createEffect(
    (): Actions => this.actions.pipe(
      ofType(generateBoardAction),
      withLatestFrom(this.store.select(getBoard)),
      mergeMap(([actionParam]) => {
        const boardData: IBoardState = this.boardService.initializeBoard(actionParam.boardSize);
        return [
          loadBoardAction({
            board: boardData.board,
            boardSize: actionParam.boardSize,
          }),
          generateMatrixAction({
            startPoint: boardData.startPoint,
            endPoint: boardData.endPoint,
          }),
        ];
        },
      ),
    ),
  );

  constructor(
    private actions: Actions,
    private store: Store<IAppState>,
    private boardService: BoardService,
  ) {}
}
