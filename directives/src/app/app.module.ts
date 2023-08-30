import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgStyleComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgIfElseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
