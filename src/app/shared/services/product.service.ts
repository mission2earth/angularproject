import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService{
    private productsData : Product[]=[]
    restUrl = "http://localhost:3000/wsproducts";
    
    constructor(private httpClient:HttpClient){

    // this.productsData = [new Product(1, "Sony TV", 30000, "Bravia LED"), 
    //     new Product(2, "Nikon Camera", 25000, "DSLR Camera"),
    //     new Product(3, "Oppo F9", 30000, "DSLR Camera"),
    //     new Product(4, "Apple Iphone 6s", 78000, "DSLR Camera")]
    }
    getProducts(){
        //return this.productsData;
        return this.httpClient.get<Product[]>(this.restUrl);
    }
    
}