import { Component } from '@angular/core';

@Component({
  selector: 'app-event-perform',
  imports: [],
  templateUrl: './event-perform.html',
  styleUrl: './event-perform.css',
})
export class EventPerform {
onClickEvent(){
  console.log("onClickEvent() :  Click Event") 
}

onInputEvent(e:any){
  console.log(e.target.value);
}

onKeyUp(e:any){
  console.log(e.key);
}

onMouseHover(){
  console.log("Mouse Over")
}

onMouseLeave(){
  console.log("Mouse Leave")
}

onFocus(){
  console.log("Focus");
}

onBular(){
  console.log("Bular")
}



}
