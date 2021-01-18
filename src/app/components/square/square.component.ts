import { Component , Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AStarFinder, Finder, Grid, Path } from 'pathfinding';
import { environment } from '../../../environments/environment';
import { clearPathAction, setPathAction, toggleSelectAction } from '../../actions';
import { IAppState } from '../../dtos/app-state';
import { IMatrixData } from '../../dtos/common';
import { Square } from '../../entities/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {

  @Input()
  public rowIndex: number;
  @Input()
  public obstacles: Array<Array<number>>;
  @Input()
  public board: Array<Array<Square>>;
  @Input()
  public matrix: IMatrixData;
  @Input()
  public columnIndex: number;

  public squareSize: string;

  constructor(private store: Store<IAppState>) {}

  public ngOnInit(): void {
    this.squareSize = `${environment.squareWidth}px`;
  }

  public onClick(status: string): void {
    this.store.dispatch(toggleSelectAction(
      {rowIndex: this.rowIndex, columnIndex: this.columnIndex},
      ));
    this.drawPath(this.rowIndex, this.columnIndex, status);
  }

  public drawPath(row: number, column: number, status: string): void {
    if (status === 'fill') {
      this.obstacles.push([row, column]);
    }

    if (status === 'clear' || status === 'path') {
      const index: number = this.obstacles.findIndex(this.existsInArray([row, column]));
      this.obstacles.splice(index, 1);
    }

    const grid: Grid = new Grid(this.matrix.grid);
    const finder: Finder = new AStarFinder({
      allowDiagonal: false,
    });

    grid.setWalkableAt(
      this.matrix.endLocation[1],
      this.matrix.endLocation[0],
      true,
    );

    for (const obstacle of this.obstacles) {
      grid.setWalkableAt(obstacle[1], obstacle[0], true);
    }

    const path: Path = finder.findPath(
      this.matrix.startLocation[1],
      this.matrix.startLocation[0],
      this.matrix.endLocation[1],
      this.matrix.endLocation[0],
      grid,
    );

    this.clearPath(grid);

    if (path.length > 0) {
      this.setPath(path);
    }
  }

  private clearPath(grid: Grid): void {
    this.store.dispatch(clearPathAction({
      gridSize: {
        x: grid.width,
        y: grid.height,
      },
    }));
  }

  public setPath(path: Path): void {
    this.store.dispatch(setPathAction({
      path,
    }));
  }

  private existsInArray(a: Array<number>): (b: Array<number>) => boolean {
    return (b: Array<number>): boolean => {
      if (a.length !== b.length) {
        return false;
      }
      for (let i: number = 0, len: number = a.length; i < len; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    };
  }
}
