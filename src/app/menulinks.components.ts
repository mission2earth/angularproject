import { Component } from "@angular/core";
import { CategoryService } from "./shared/services/category.service";
import { Category } from "./models/category.model";

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
       <div class ="col-sm-2 card">
       <div class="card-header bg-primary"><b>Categories</b></div>
       <div class="card-body">
        <ul class="list-group"> 
        <li class ="list-group-item" *ngFor="let link of ctgLinks"><a [routerLink]="link.id">{{link.name}}</a> </li>
        </ul>
       </div>
       </div>
            <div class="col-sm-5">
    <!--    <app-products></app-products>-->
    <router-outlet></router-outlet>
       </div>
       <div class="col-sm-5 card card-body">
       <app-cartitems></app-cartitems>
       </div>
       <div>`    
})
export class ShoppingListComponent{
    ctgLinks : Category[]=[];
    constructor(private csvc: CategoryService) {  

    console.log("ShoppingListComponent constructor")        
}
    ngOnInit(){
        this.csvc.getCategories().subscribe((data)=> {this.ctgLinks = data}, (err) => {console.log("");});
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

