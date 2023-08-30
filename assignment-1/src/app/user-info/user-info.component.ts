import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  // standalone: true,
})
export class UserInfoComponent {
  username: string = '';
  show: boolean = false;
  log: any[] = [];
  alertMsg: string = '';

  /*   // Solution One
  disabledBtn: boolean = true;
  
  setDisabledBtn(): boolean {
    // console.log('setDisabledBtn');

    return (this.disabledBtn = this.username == '' ? true : false);
  }

  resetUsername(): string {
    return (this.username = '');
  } */

  showDetailes(e: any): boolean {
    // debugger
    this.log.push({ MyDate: new Date() });
    return (this.show = !this.show);
  }

  showAlert(value: any) {
    // alert(value);
  }
}
