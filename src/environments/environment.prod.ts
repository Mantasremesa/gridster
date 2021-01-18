import { IConfig } from '../app/dtos/common';

export const environment: IConfig = {
  production: true,
  boardSize: {
    rows: 10,
    columns: 10,
  },
  squareWidth: 53,
};
