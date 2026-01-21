import { Component } from '@angular/core';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-d-type',
  imports: [],
  templateUrl: './d-type.html',
  styleUrl: './d-type.css',
})
export class DType {
name : string | number = "Saurav";// union type
// name : string | number = 10
anyD : any = 100;  // We can store any type of data 
age : number = 26;
isValid : boolean = true;

hendelEvent(){
  let value;
  value ="Saurav"
  value = 10;
  console.log(value)// 10 value overwrite here;
  
} 


}


