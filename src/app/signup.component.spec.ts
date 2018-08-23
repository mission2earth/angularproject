import { TestBed } from "@angular/core/testing";
import { RegisterComponent } from "./login/register.component";
import { MySignComponent } from "./shared/mysign.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("Signup Test Demo", ()=> 
{
it("should verify instance of Register component", ()=> {
    TestBed.configureTestingModule({
        declarations: [RegisterComponent, MySignComponent],
        imports: [ReactiveFormsModule]
    })
    let f = TestBed.createComponent(RegisterComponent)
    expect(f).toBeDefined();
})

})