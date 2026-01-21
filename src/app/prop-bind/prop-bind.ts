import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  imports: [],
  templateUrl: './prop-bind.html',
  styleUrl: './prop-bind.css',
})
export class PropBind {
imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcQgi42rFdpvnsaJ1jQ1gCs-_XprrcZc5DQ&s";
imageURL1 = "D:\Angular\First\my-app\public\Snapchat-894853549.jpg";
isDisabled = false;
userName ="Saurav";
isActive = false;
boxWidth = "100";
bgColor="red";
count = signal(0);
}
