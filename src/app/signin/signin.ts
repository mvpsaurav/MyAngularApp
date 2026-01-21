import { Component } from "@angular/core";

@Component({
selector:'app-signin',
template:`<h1>Hello signIn one {{title}}</h1>`,
styles:[
    `h1{
    color:red;
    }
    `
],

})

export class signinComponent{
    title = "h1llo"
}