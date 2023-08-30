import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent {
  ngStylePadding: string = '1rem 2rem';
  ngStyleBorderRadius: string = '5px';
  ngStyleBottomBorder = '10px solid #33272a';

  ngStyleAlert = {
    color: '#33272a',
    'background-color': '#faeee7',
    'font-weight': 'bold',
    borderBottom: this.ngStyleBottomBorder,
  };
}
