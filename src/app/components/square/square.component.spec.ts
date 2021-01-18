import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { NgLetModule } from '@ngrx-utils/store';
import { provideMockStore } from '@ngrx/store/testing';
import { IAppState } from '../../dtos/app-state';
import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  const initialState: IAppState = {
    board: [],
    boardSize: {
      rows: 0,
      columns: 0,
    },
    matrix: {
      grid: [],
      startLocation: [],
      endLocation: [],
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SquareComponent],
      providers: [provideMockStore({initialState})],
      imports: [NgLetModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;

    component.board = [[
      {
        id: 2, rowIndex: 0, columnIndex: 0, status: 'start',
        clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
      },
      {
        id: 3, rowIndex: 0, columnIndex: 1, status: 'fill',
        clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
      },
      { id: 4, rowIndex: 0, columnIndex: 2, status: 'fill',
        clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
      },
      { id: 5, rowIndex: 0, columnIndex: 3, status: 'fill',
        clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
      },
    ],
      [
        { id: 6, rowIndex: 1, columnIndex: 0, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 7, rowIndex: 1, columnIndex: 1, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 8, rowIndex: 1, columnIndex: 2, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 9, rowIndex: 1, columnIndex: 3, status: 'end',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
      ],
      [
        { id: 10, rowIndex: 2, columnIndex: 0, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 11, rowIndex: 2, columnIndex: 1, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 12, rowIndex: 2, columnIndex: 2, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 13, rowIndex: 2, columnIndex: 3, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
      ],
      [
        { id: 14, rowIndex: 3, columnIndex: 0, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 15, rowIndex: 3, columnIndex: 1, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 16, rowIndex: 3, columnIndex: 2, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
        { id: 17, rowIndex: 3, columnIndex: 3, status: 'fill',
          clearPath(): void {}, markAsEnd(): void {}, markAsPath(): void {}, markAsStart(): void {}, toggleSelect(): void {},
        },
      ]];
    component.obstacles = [[0, 0 ], [0, 1], [0, 2], [0, 3]];
    component.rowIndex = 3;
    component.columnIndex = 1;
    component.squareSize = '530px';
    component.matrix = {
      grid: [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
      endLocation: [1, 3],
      startLocation: [0, 0],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set path', () => {
    spyOn(component, 'setPath');
    component.onClick('fill');
    expect(component.setPath).toHaveBeenCalled();
  });

  it('should set not set path', () => {
    spyOn(component, 'setPath');
    component.onClick('clear');
    expect(component.setPath).not.toHaveBeenCalled();
  });

  it('should set not set path', () => {
    component.obstacles = [[0, 0 ], [0, 1], [0, 2]];
    spyOn(component, 'setPath');
    component.onClick('clear');
    expect(component.setPath).not.toHaveBeenCalled();
  });
});
