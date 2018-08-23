import { Component } from "@angular/core";

@Component({

    selector: "sign-in",
template: `
<h4>Welcome {{userName}}</h4>
<my-sign [title] = "signInHeading" (myEventEmitter)="handleMyEvent($event)"></my-sign>`
})
export class SignInComponent{
    userName = "Guest"
signInHeading = "Sign In"
    constructor (){
        console.log("SignIn Componet constructor")
    }
    handleMyEvent(obj) : void{
        this.userName = obj.userName;

    } 
}