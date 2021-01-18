# GridsterApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Task
* Inputs 'Rows' & Column - only integers and max value is 20
* The initial dimensions of the grid should be 10 by 10.
* When the grid is first initialised or resized exactly one square on the left is chosen at random and marked as a 'start' square and coloured appropriately.
* When the grid is first initialised or resized exactly one square on the right is chosen at random and marked as an 'end' square and coloured appropriately.
* The initial state of each square in the grid except the 'start' and 'end' squares is 'filled' and it should be coloured appropriately.
* Clicking on any 'filled' square which is not the 'start' or 'end' square changes its state to 'clear', and it should be re-coloured appropriately.
* Clicking on any 'clear' square which is not the 'start' or 'end' square changes its state to 'filled'
* If the value of either input is changed and the generate button is clicked, the grid should be resized appropriately, the 'start' and 'end' squares should be re-set as described above and all squares other squares should be re-set to ‘filled'

--------------------------------

* If at any point there is a connected path of 'clear' squares all the way from the 'start' square to the 'end' square then the path should be coloured appropriately.
* 'clear' squares are only connected by their sides. They do not connect diagonally.

* If there is more than one path from the 'start' square to the 'end' square then only the shortest path should be shown.

Depending on your approach you may find that you need a min or max priority queue.
Can use "priority queue" libraries on NPM.

es6, TypeScript, NgRX, with webpack, create configuration by your own.
