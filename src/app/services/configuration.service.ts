import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IBoardSize } from '../dtos/common';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {

  public boardSize(): IBoardSize {
    return environment.boardSize;
  }
}
