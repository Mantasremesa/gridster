import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgLetModule } from '@ngrx-utils/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { SquareGeneratorComponent } from './components/square-generator/square-generator.component';
import { SquareComponent } from './components/square/square.component';
import { getBoardReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    SquareGeneratorComponent,
  ],
  imports: [
    NgLetModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AppEffects]),
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({rootState: getBoardReducer}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
