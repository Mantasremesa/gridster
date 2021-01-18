import { Injectable } from '@angular/core';
import { Square } from 'src/app/entities/square';
import { IBoardState } from '../dtos/app-state';
import { IBoardSize } from '../dtos/common';
import { BoardGenerator } from '../generators/board-generator.generator';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root',
})
export abstract class BoardService {

  public boardGenerator: BoardGenerator;

  protected constructor(private configurationService: ConfigurationService) {
    this.boardGenerator = new BoardGenerator();
  }

  public initializeBoard(boardSize: IBoardSize): IBoardState {
    const newBoardSize: IBoardSize = boardSize || this.configurationService.boardSize();
    const board: Array<Array<Square>> = this.boardGenerator.createBoard(newBoardSize);
    const startPoint: Array<number> = this.boardGenerator.generateStartSquare(board, boardSize.rows);
    const endPoint: Array<number> = this.boardGenerator.generateEndSquare(board, boardSize);
    return {
      board,
      startPoint,
      endPoint,
    };
  }
}
