import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from "@angular/core";


@Component({
    selector : "my-sign",
    template:`<h3> {{title}} </h3>
    <form>
    User Name  : <input type ="text" placeholder="Enter User Name" #frmUser/>  <br>
    Password :  <input type ="text" placeholder="Enter Password" #frmPassword/>  <br>
    <button type="button" (click) = "handleButtonClick(frmUser.value, frmPassword.value)" class = "btn btn-primary">{{title}}</button>
    </form>
    `
})
export class MySignComponent implements OnInit, OnChanges, OnDestroy{
    
    ngOnInit(): void {
        console.log("MySign ngOnInit method..", this.title)
    }

    ngOnChanges(): void {
        console.log("MySign ngOnChanges method..", this.title)
    }
    ngOnDestroy(): void {
        console.log("MySign ngOnDestroy method..", this.title)
    }
    @Input()
    title : string;
    @Output()
    myEventEmitter = new EventEmitter()

    constructor(){
        console.log("MySignComponent constructor", this.title)
    }

    handleButtonClick(userName, password) : void{
        console.log("Button clicked...UserName : ", userName, "Password : ", password)
        this.myEventEmitter.emit({userName, password});
    }

}