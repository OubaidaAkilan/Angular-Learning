# Angular-Learning:

## Angular ClI :

1- To install the Angular CLI globally on your system.

```
npm install -g @angular/cli
```

2- Create a New Angular App.

```
ng new my-angular-app
```

3- Navigate to Your App's Directory.

```
cd my-angular-app
```

4- Serve the App.

```
ng serve
```

## Create component

The component contains a decorator and class of component.

```
ng g c [name-component]
```

## Data Binding

There are four way to connect data between busniss logic (TS code class component) and template (HTML file).

1- String interpolation {{ data }}.

2- Property Binding : moves a value in one direction, from a component's property (TS file) into a target element property (Template HTML file).  
[attribute]="nameOfStatus" for example [disable]="activeBtn",  
using this property we can access any element with HTML dom'

3- Event Binding : (event)="function($event)", $event: to pass event into business logic.

4- Tow-Way-Binding : ([ngModel])="statusORmethodes"

## Directives

It represents the instructions like (Functionality and behavior) we will give to the DOM (HTML elements) and there are two directives.

1- Built-in directive (structural directives , attribute directives).

    - Structural Directives are a way of handling how a component or element renders through the use of the ng-template tag. This allows us to run some code that decides what the final rendered output will be. Angular has a few built-in structural directives such as ngIf, ngFor, and ngSwitch.

    - Attribute directives are a way of changing the appearance or behavior of a component such as ngClass and ngStyle that work on any component or element.

2- Costume directives.

ngIf: The ngIf directive conditionally adds or removes content from the DOM based on whether or not an expression is true or false (\*ngIf="exists").

ngFor: The ngFor directive is a way of repeating a template by using each item of an iterable as that template's context (\*ngFor="let item of items")

ngStyle:To modify a component or element's style attribute (
[ngStyle]="{backgroundColor:getColor()}
[ngStyle]="{backgroundColor:'red'}
)

ngClass:The ngClass directive changes the class attribute that is bound to the component or element it's attached to.( [ngClass]="{online: getServerStatus() === 'online'}" ).
