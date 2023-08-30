import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
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
