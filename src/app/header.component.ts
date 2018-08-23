import { Component } from "@angular/core";

@Component({
    selector :"app-header",
    //template : "<h3>My first angular header component</h3>",
    templateUrl :"./header.component.html"
})
export class HeaderComponent{
    appTitle : string;
    userName = "Guest";
    constructor() {
        this.appTitle = "My Shopping App"
        console.log("HeaderComponent constructor")
        let appTitle = ""; //local variable
    }

    showUserName() : string {
        return this.userName;
    }
}