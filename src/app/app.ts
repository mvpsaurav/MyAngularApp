import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { signinComponent } from './signin/signin';
import { PropBind } from './prop-bind/prop-bind';
import { Event } from './event/event';
import { NewEvent } from './new-event/new-event';
import { EventPerform } from './event-perform/event-perform';
import { CounterApp } from './counter-app/counter-app';
import { GetSet } from './get-set/get-set';

@Component({
  selector: 'app-root',
  // imports: [Login,signinComponent,PropBind],
    // imports:[CounterApp],
    imports :[GetSet],
    // imports:[NewEvent],
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
