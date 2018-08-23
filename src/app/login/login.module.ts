import { NgModule } from "@angular/core"
import { SignInComponent } from "./login.component";
import { RegisterComponent } from "./register.component";
import {RouterModule} from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations :[SignInComponent,RegisterComponent,  ] ,
    imports : [SharedModule, RouterModule.forChild([{path : "signin", component : SignInComponent},
    {path : "register", component : RegisterComponent},])]
})
export class LoginModule{
    constructor(){
        console.log("LoginModule constructor")
    }
}