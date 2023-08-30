# Angular-Learning:

## Angular CLI :

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

It represents the instructions like (Functionality and behavior) we will give to the DOM (HTML elements) and there are two [directives]().

