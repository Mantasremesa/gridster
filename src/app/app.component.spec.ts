import { ComponentFixture, TestBed} from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore} from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { SquareGeneratorComponent } from './components/square-generator/square-generator.component';
import { SquareComponent } from './components/square/square.component';
import { IAppState } from './dtos/app-state';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SquareGeneratorComponent,
        SquareComponent,
      ],
      providers: [
        provideMockStore({initialState}),
        FormBuilder,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Gridster app'`, () => {
    expect(component.title).toEqual('Gridster app');
  });
});
