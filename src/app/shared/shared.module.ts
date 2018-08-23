import { NgModule } from "@angular/core";
import { MySignComponent } from "./mysign.component";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";
import { CategoryService } from "./services/category.service";

@NgModule({
declarations : [MySignComponent],
imports : [],
exports :[MySignComponent],
providers: [ProductService, CartService, CategoryService]
})
export class SharedModule{
    constructor() {
        console.log("SharedModule constructor")
    }
}