import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms"


@Component({
    selector : "my-sign",
    template:`<h3> {{title}} </h3>
    <form novalidate [formGroup]="myForm">
    User Name  : <input type ="text" placeholder="Enter User Name" formControlName="mname" required/>  
    <b style="color:red" *ngIf= "myForm.controls.mname.invalid && myForm.controls.mname.dirty">User Name is required </b>
    <br>
    Password :  <input type ="text" placeholder="Enter Password" formControlName="mpwd" required minlength="3"/>
    <b style="color:red" *ngIf= "myForm.controls.mpwd.invalid && myForm.controls.mpwd.dirty">
        <span *ngIf="myForm.controls.mpwd.errors.required"> Password is required </span>
        <span *ngIf="myForm.controls.mpwd.errors.minlength"> Password should have minimum 3 characters </span>
    </b>
      <br><br>
    <button type="button" (click) = "handleButtonClick()" 
    class = "btn btn-primary">{{title}}</button>
    </form>
    <pre>{{myForm.value |json}} </pre>
    `
})
export class MySignComponent implements OnInit, OnChanges, OnDestroy{
    
    ngOnInit(): void {
        console.log("MySign ngOnInit method..", this.title)
        this.myForm = new FormGroup(
            {
                mname : new FormControl("", Validators.required),
                mpwd : new FormControl("", [Validators.required, Validators.minLength(3)])
            }
        );
    }

    ngOnChanges(): void {
        console.log("MySign ngOnChanges method..", this.title)
    }
    ngOnDestroy(): void {
        console.log("MySign ngOnDestroy method..", this.title)
    }

    myForm:FormGroup;


    @Input()
    title : string;
    @Output()
    myEventEmitter = new EventEmitter()

    constructor(){
        console.log("MySignComponent constructor", this.title)
    }




    // handleButtonClick(userName, password) : void{
    //     console.log("Button clicked...UserName : ", userName, "Password : ", password)
    //     this.myEventEmitter.emit({userName, password});
    // }
    handleButtonClick() : void{
        //this.myEventEmitter.emit({"", ""});
    }


}