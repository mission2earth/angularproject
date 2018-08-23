import {NgModule} from "@angular/core"
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import {BrowserModule} from "@angular/platform-browser"
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { HomeComponent, ShoppingListComponent, NotFoundComponent } from "./menulinks.components";
import { RouterModule } from "@angular/router"
import { HttpClientModule } from "@angular/common/http"
import { ProductsComponent } from "./shopping/products.component";

let appRoutes =[
    {path :"", component : HomeComponent},
    {path : "list", component : ShoppingListComponent, children:[
        {path: "", component: ProductsComponent},
        {path: ":ctgid", component:ProductsComponent}
    ]}, 
    {path : "**", component : NotFoundComponent}
]

@NgModule({
    //Register component
    declarations: [AppComponent, HeaderComponent, HomeComponent, ShoppingListComponent, NotFoundComponent],
    //Specify Module dependencies
    imports : [BrowserModule, LoginModule, ShoppingModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    //Startup component - specify
    bootstrap : [AppComponent]
})
export class AppModule {

    constructor(){
        console.log("AppModule constructor")
    }
}
