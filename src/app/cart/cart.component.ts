import { Component, DoCheck, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListService } from '../product-list.service';
import { Subscription } from 'rxjs';
import { BottomdetailComponent } from '../bottomdetail/bottomdetail.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { PurchaselistService } from '../purchaselist.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule,BottomdetailComponent,TopbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit,OnDestroy{
  sub = new Subscription();
  noOfItems:number = 0;
  totalAmount:number = 0;
  cartItems:{img:string,name:string,price:number,size:string,quantity:number}[] = [];
    constructor(private product : ProductListService,private route:Router,private purchase:PurchaselistService){}
    ngOnInit(): void {
      this.sub = this.product.cartItems.subscribe(
        (items) =>{
          this.cartItems = items;
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

    removeItem(index:number,price:number,quantity:number){
      this.cartItems.splice(index,1);
      this.totalAmount -= price*quantity;
      this.noOfItems -=quantity;
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
    navigateCheckout(){
      this.route.navigate(['checkout']);
      this.purchase.updatePurchaseList(this.cartItems);
    }
  isMobile: boolean = window.innerWidth < 640;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 640;
  }
}
