import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { generateBoardAction } from './actions';
import { IAppState } from './dtos/app-state';
import { IBoardSize, IMatrixData } from './dtos/common';
import { Square } from './entities/square';
import { getBoard, getBoardSize, getMatrix } from './selectors';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Gridster app';
  public columns: Array<number>;
  public rows: Array<number>;
  private boardSizeObservable: Observable<IBoardSize>;
  public maxWidth: string;
  public matrix: IMatrixData;
  public obstacles: Array<Array<number>> = [];
  public boardObservable: Observable<Array<Array<Square>>>;
  public board: Array<Array<Square>>;
  private matrixObservable: Observable<IMatrixData>;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store<IAppState>,
    private configurationService: ConfigurationService,
  ) {}

  public ngOnInit(): void {
    this.updateBoardWidth(environment.boardSize.columns);
    this.getBoardSize();
    this.generateBoard();
    this.getBoard();
    this.getMatrix();
  }

  private getBoardSize(): void {
    this.boardSizeObservable = this.store.select(getBoardSize);
    this.subscriptions.add(this.boardSizeObservable.subscribe(
      (boardSize: IBoardSize): void => {
        this.rows = Array(boardSize.rows);
        this.columns = Array(boardSize.columns);
      }));
  }

  private generateBoard(): void {
    this.store.dispatch(generateBoardAction({
      boardSize: {
        ...this.configurationService.boardSize(),
      },
    }));
  }

  private getBoard(): void {
    this.boardObservable = this.store.select(getBoard);
    this.subscriptions.add(this.boardObservable.subscribe(
      (board: Array<Array<Square>>): void => {
        this.board = board;
      }));
  }

  private getMatrix(): void {
    this.matrixObservable = this.store.select(getMatrix);
    this.subscriptions.add(this.matrixObservable.subscribe(
      (matrix: IMatrixData): void => {
        this.matrix = matrix;
      }));
  }

  public updateBoardWidth(columns: number): void {
    const appWidthConstant: number = 10;
    this.maxWidth = (columns > appWidthConstant) ? `${columns * environment.squareWidth}px` : `${environment.squareWidth * appWidthConstant}px`;
    this.obstacles = [];
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
