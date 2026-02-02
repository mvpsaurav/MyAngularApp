import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {
    items =["Apple","Banana","Orang","Papaya"]

  object = [
    {name:"Saurav",age:26},
    {name:"Mohit",age:30},
    {name:"Gaurav",age:29},
    {name:"Avi",age:25},
  ]
  removeData(i: number){
    this.items.splice(i,1);
  }
  
  numberss = [1,4,5,7,456,88,6,4,2,4,10,435,45,66]

//   numberss = [1, 2, 3, 4, 5].filter(
//   (n): n is number => n !== undefined
// );

}
