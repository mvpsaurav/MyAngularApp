import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
count = 0;
increaseCount(){
  this.count++;
}
showEvent(e:any){
  console.log(e);
}
userName ="a"
updateUser(value : string){
    this.userName = value;
}

flagCount=signal(0);

incre(){
  this.flagCount.update((fc)=>fc+1);
}

handelSubmit(e:any){
  e.preventDefault()
  console.log("Form Submited;")
  console.log(e);
}

}
