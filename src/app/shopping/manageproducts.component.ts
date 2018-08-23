import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styles: []
})
export class ManageproductsComponent implements OnInit {
manageproducts:Product[]=[]
  constructor(private ps: ProductService) { }

  ngOnInit() {
    // this.manageproducts =  = this.ps.getProducts();
     this.ps.getProducts().subscribe(data=> this.manageproducts = data, err=> console.log("error", err));
  }
}
