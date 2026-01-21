import { Component } from '@angular/core';

@Component({
  selector: 'app-new-event',
  imports: [],
  templateUrl: './new-event.html',
  styleUrl: './new-event.css',
})
export class NewEvent {
count = 0;
callEvent(){
  console.log("Function Call ")
  this.helloFunction()
}
helloFunction(){
  console.log("Hello Function  " + this.count);
  this.count++
}

}
