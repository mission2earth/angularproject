import { Injectable } from "../../../../node_modules/@angular/core";
import { CartItem } from "../../models/cart.model";

@Injectable()
export class CartService{
    private cartData : CartItem[]=[];
    constructor(){
    }
    getCartItems(){
        return this.cartData;
    }

    addNewItemIntoCart(newItem : CartItem)
    {   
       let obj = this.cartData.find(o=> o.id == newItem.id);
       if(obj == null)
         this.cartData.push(newItem);
         else{
            
            // let index = this.cartData.indexOf(obj);
            // this.cartData.fill(obj.quantity= obj.quantity+1, index, index++);
         }

    }

    removeCartItem(indx:number){
        this.cartData.splice(indx, 1);
    }
}