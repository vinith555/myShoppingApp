import { Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListService } from '../product-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit,OnDestroy{
  sub = new Subscription();
  noOfItems:number = 0;
  totalAmount:number = 0;
  cartItems:{img:string,name:string,price:number,size:string,quantity:number}[] = [];
    constructor(private product : ProductListService){}
    ngOnInit(): void {
      this.sub = this.product.cartItems.subscribe(
        (items) =>{
          this.cartItems = items;
          console.log(this.cartItems);
        }
      );
      this.cartItems.forEach((element)=>{
        this.totalAmount += element.price * element.quantity;
        this.noOfItems += element.quantity;
      });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    increaseQuantity(index:number){
        this.cartItems[index].quantity++;
        this.noOfItems++;
        this.totalAmount += this.cartItems[index].price;
    }
    decreaseQuantity(index:number){
      if(this.cartItems[index].quantity>1){
        this.cartItems[index].quantity--;
        this.noOfItems--;
        this.totalAmount -= this.cartItems[index].price;
      }
    }
}
