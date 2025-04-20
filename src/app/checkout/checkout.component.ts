import { Component, OnInit } from '@angular/core';
import { PurchaselistService } from '../purchaselist.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';

@Component({
    standalone:true,
    selector: 'app-checkout',
    imports: [CommonModule, RouterOutlet],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
totalQuatity:number = 0;
totalAmount:number = 0;
dispNo:number=0;
constructor(private purchase:PurchaselistService){}
purchaseList:{img:string,name:string,price:number,size:string,quantity:number}[]=[{img:'img1.jpg',name:'Classic maroon t-shirt',price:1200,size:'s',quantity:3}]
ngOnInit(): void {
   this.purchaseList= this.purchase.getPurchaseList();
   console.log(this.purchaseList);
   this.purchaseList.forEach((ele)=>{
    this.totalQuatity+=ele.quantity;
    this.totalAmount+=ele.quantity*ele.price;
   });
}
}
