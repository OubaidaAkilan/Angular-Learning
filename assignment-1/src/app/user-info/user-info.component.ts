import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  username: string = '';
  
/*   // Solution One
  disabledBtn: boolean = true;
  
  setDisabledBtn(): boolean {
    // console.log('setDisabledBtn');

    return (this.disabledBtn = this.username == '' ? true : false);
  }

  resetUsername(): string {
    return (this.username = '');
  } */
 
}
