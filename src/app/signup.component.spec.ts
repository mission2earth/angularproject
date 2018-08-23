import { TestBed } from "@angular/core/testing";
import { RegisterComponent } from "./login/register.component";
import { MySignComponent } from "./shared/mysign.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from "./login/login.component";

describe("Signup Test Demo", ()=> 
{
    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent, MySignComponent],
            imports: [ReactiveFormsModule]
        })
    })
it("should verify instance of Register component", ()=> {    
    let f = TestBed.createComponent(RegisterComponent)
    expect(f).toBeDefined();
})

it("should verify Datamember", ()=>
{
let f = TestBed.createComponent(RegisterComponent);
let obj = f.componentInstance;

expect(obj.registerHeading).toEqual("Register")
})

})