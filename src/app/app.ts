import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { signinComponent } from './signin/signin';
import { PropBind } from './prop-bind/prop-bind';
import { Event } from './event/event';
import { NewEvent } from './new-event/new-event';

@Component({
  selector: 'app-root',
  // imports: [Login,signinComponent,PropBind],
    imports:[NewEvent],
    // imports:[Event],
  //templateUrl: './first.html',// Change UI Rander page
  // template:`<h1> Hello hii {{name}}</h1>`,  // Inline Template 
   templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  name = 'Saurav'
  age = 25
  getName(){
    return this.name;
  }
  getSum(x:number,y:number)
  {
    return x+y;
  }
  
}
