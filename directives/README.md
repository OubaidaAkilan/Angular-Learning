# Directives

are the classs which allow us to add additional behavior and modify existing behavior to our elements, we can use the directive to manage forms, lists, styles.

## Types of Directives

- Structural Directives.
- Attribute Directive.
- Component Directive.

### Structural Directives

It's used to change the structure of DOM by adding or removing DOM elements.  
This directive has an \* sign before the directive, they are mainly used to create, hide, destroy, disable DOM elements.

#### Types of Structural Directives:

- [ngIf](https://github.com/OubaidaAkilan/Angular-Learning/tree/directive-assignment/directives/src/app/ng-if).
- [ngIfElse](https://github.com/OubaidaAkilan/Angular-Learning/tree/directive-assignment/directives/src/app/ng-if-else).
- [ngFor](https://github.com/OubaidaAkilan/Angular-Learning/tree/directive-assignment/directives/src/app/ng-for).
- [ngSwitch](https://github.com/OubaidaAkilan/Angular-Learning/tree/directive-assignment/directives/src/app/ng-switch).

ngIf :It is used to display or hide an element based on the condition determined by the expression we pass into the directive.The element will be removed if the result of expression is return false.

ngFor :In this directive, DOM elements are repeated and one element from an array is passed each time.  
It is the structural directive which will add or remove components from the DOM.  
ngFor is basically a for loop which is used to create some repeating elements on the DOM.

ngSwitch :This directive is allow us to add or remove the element depending on a match expression.  
It is used to render different elements depending on a given condition.  
It contains three separate directives. ngSwitch, ngSwitchCase & ngSwitchDefault.

### Attribute Directive

are used to apply conditional style to elements, to show or hide elements, or to dynamically change a component’s behavior. It can change the appearance or behavior of an element.

#### Types of Attribute Directive:

- [ngStyle](https://github.com/OubaidaAkilan/Angular-Learning/tree/directive-assignment/directives/src/app/ng-style) : It is used to add or modify the style of DOM based on the some condition.we can use ngStyle directive to change the style of the element.

- [ngClass](https://github.com/OubaidaAkilan/Angular-Learning/tree/directive-assignment/directives/src/app/ng-class) : Allows us to dynamically set and change the CSS classes for a DOM element.

What is difference between ngstyle and ngclass? [Answer](https://stackoverflow.com/questions/26919963/what-is-the-difference-between-ng-class-and-ng-style)

## Acknowledgements

- [Directives](https://angular-training-guide.rangle.io/directives)
- How to use [ngfor,ngif together](https://www.angularjswiki.com/angular/how-to-use-ngfor-ngif-together-on-same-element-in-angular/#:~:text=Reasons%20Why%20we%20cannot%20use,first%20*ngIf%20or%20*ngFor%3F) on the same element in angular
- [ngSwitch](https://scanskill.com/frontend/angular/types-of-directives-in-angular/)
- How you can use [ngIf and Else](https://ultimatecourses.com/blog/angular-ngif-else-then) together
