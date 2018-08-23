import { Component } from "@angular/core";

@Component({
    template:`<h3>Welcome to home - My Shopping App </h3>`    
})
export class HomeComponent{
        constructor() {
      
        console.log("HomeComponent constructor")        
    }
}
@Component({
       template : `
       <div class="row">
            <div class="col-sm-7">
       <app-products></app-products>
       </div>
       <div class="col-sm-5 card card-body">
       <app-cartitems></app-cartitems>
       </div>
       <div>`    
})
export class ShoppingListComponent{
    constructor() {
  
    console.log("ShoppingListComponent constructor")        
}
}
@Component({
    template : `<h3> Not found</h3>`    
})
export class NotFoundComponent{
    constructor() {  
    console.log("NotFoundComponent constructor")        
}

}

