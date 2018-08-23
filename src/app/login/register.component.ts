import { Component } from "@angular/core";

@Component({

    selector: "register",
template:`<my-sign [title] = "registerHeading"></my-sign>`
})
export class RegisterComponent{
    registerHeading = "Register"
    constructor (){
        console.log("RegisterComponet constructor")
    }
}