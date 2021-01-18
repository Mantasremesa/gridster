export class Square {

  constructor(
    public id: number,
    public rowIndex: number,
    public columnIndex: number,
    public status: string,
    ) {}

  public markAsStart(): void {
    this.status = 'start';
  }

  public markAsPath(): void {
    if (this.status !== 'start' && this.status !== 'end') {
      this.status = 'path';
    }
  }

  public clearPath(): void {
    if (this.status !== 'start' && this.status !== 'end' && this.status === 'path') {
      this.status = 'clear';
    }
  }

  public markAsEnd(): void {
    this.status = 'end';
  }

  public toggleSelect(): void {
    if (this.status === 'fill') {
      this.status = 'clear';
    } else if (this.status === 'clear' || this.status === 'path') {
      this.status = 'fill';
    }
  }
}
