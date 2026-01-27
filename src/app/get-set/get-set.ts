import { Component } from '@angular/core';
import { validateStandardSchema } from '@angular/forms/signals';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.css',
})
export class GetSet {
name : string = "";
email : string = "";

updateName(val :string){
  this.name = val;
}

getEmail(val : string){
  this.email = val;
}

}
