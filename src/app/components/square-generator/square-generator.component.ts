import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { generateBoardAction } from '../../actions';
import { IAppState } from '../../dtos/app-state';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-square-generator',
  templateUrl: './square-generator.component.html',
  styleUrls: ['./square-generator.component.scss'],
})
export class SquareGeneratorComponent {

  @Input()
  public rowIndex: number;
  @Input()
  public columnIndex: number;
  @Input()
  public maxWidth: string;

  @Output()
  public boardSizeEmitter: EventEmitter<number> = new EventEmitter<number>();

  public columnsInput: number = environment.boardSize.columns;
  public rowsInput: number = environment.boardSize.rows;

  public generatorForm: FormGroup = this.fb.group({
    rowsInput: ['',
      [
        Validators.required,
        Validators.min(1),
        Validators.max(20),
      ],
    ],
    columnsInput: ['',
      [
        Validators.required,
        Validators.min(1),
        Validators.max(20),
      ],
    ],
  });

  constructor(
    private store: Store<IAppState>,
    private boardService: BoardService,
    private fb: FormBuilder,
  ) {}

  public drawBoard(rows: number, columns: number): void {
    this.store.dispatch(generateBoardAction({
      boardSize: {
        rows,
        columns,
      },
    }));

    this.boardSizeEmitter.emit(columns);
  }

  public get errorMessage(): string {
    if (this.generatorForm?.controls.columnsInput?.errors?.required) {
      return 'Columns field is required';
    }
    if (this.generatorForm?.controls.rowsInput?.errors?.required) {
      return 'Rows field is required';
    }
    if (this.generatorForm?.controls.rowsInput?.errors?.max || this.generatorForm?.controls.rowsInput?.errors?.min) {
      return 'Rows size can only be between [1-20]';
    }
    if (this.generatorForm?.controls.columnsInput?.errors?.max || this.generatorForm?.controls.columnsInput?.errors?.min) {
      return 'Columns size can only be between [1-20]';
    }
  }
}
