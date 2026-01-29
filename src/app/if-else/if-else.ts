import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
age = 0;
checkElagibl(val : string){
this.age = Number(val);
}
section : string ="Home"

categories : string = "";
getValue(val : string){
  this.categories = val;
}



}

