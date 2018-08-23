import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ManageproductsComponent } from './manageproducts.component';
import { RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";
import { CategoriesComponent } from './categories.component'
import { SharedModule } from "../shared/shared.module";

@NgModule({  
    declarations: [ProductsComponent, CartitemsComponent, ManageproductsComponent, CategoriesComponent ],
    exports : [ProductsComponent, CartitemsComponent ],
    imports : [CommonModule, FormsModule, SharedModule, RouterModule.forChild
        ([
        {path: "manage", component:ManageproductsComponent},
        {path:"categories", component:CategoriesComponent}
    ])]
})
export class ShoppingModule{
    constructor(){
        console.log("ShoppingModule constructor")
    }
}