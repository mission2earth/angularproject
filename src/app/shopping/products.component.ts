import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from '../models/cart.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
products : Product[]=[];
  constructor(private ps:ProductService, private cs : CartService) {

   }

  ngOnInit() {
    //Product data should be added after rendering
   // this.products = this.ps.getProducts();
   this.ps.getProducts().subscribe(data=> this.products = data, err=> console.log("error", err));
  }

  addtoCart(selectedProduct : Product): void{
    let newItem = new CartItem(selectedProduct.id, selectedProduct.name, selectedProduct.price, 1);
    this.cs.addNewItemIntoCart(newItem);

  }
}
