import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  todoList: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  show: boolean = false;
  //style
  pragraphStyle = {
    backgroundColor: '#faeee7',
    color: '#594a4e',

    fontSize: '1.5rem',
    fontWeight: 'bold',

    padding: '1rem',
    margin: '1rem',
  };

  // methods
  setShow(): void {
    this.show = !this.show;
  }
}
