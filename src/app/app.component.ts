import { Component } from "@angular/core";

@Component({
    //Specify Tag name for the component
    selector: "app-root",
    //Provide display output for the component
    template: `<app-header>
    </app-header> 
    <router-outlet></router-outlet>`
})
export class AppComponent{
    constructor(){
        console.log("AppComponent constructor")
    }
}